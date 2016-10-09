(ns ^:figwheel-always matchit.core
  (:require
    [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn ->row
  [row tiles]
  (map-indexed #(-> %2
                    (assoc :x %1)
                    (assoc :y row)) tiles))

(defn ->id
  [index tile]
  (assoc tile :id index))

(defn board
  [row-count]
  (let [tiles [{:face :pikachu :image "img/pikachu.png"}
               {:face :charmander :image "img/charmander.png"}
               {:face :squirtle :image "img/squirtle.png"}
               {:face :abra :image "img/abra.png"}
               {:face :bulbasaur :image "img/bulbasaur.png"}
               {:face :piplup :image "img/piplup.png"}]
        rows (repeat row-count tiles)]
    (->> (range 0 row-count)
         (map #(->row % (shuffle (nth rows %))))
         (flatten)
         (map-indexed ->id))))

(defonce app-state (atom {:board (board 4) :width 900 :height 600}))

(defn reveal
  ([board]
   (map #(assoc % :revealed? true) board))
  ([id board]
   (let [by-id #(= id (:id %))
         tile (first (filter by-id board))
         removed (remove by-id board)]
     (-> (assoc tile :revealed? true)
         (cons removed)))))

(defn hide
  [id board]
  (let [by-id #(= id (:id %))
        tile (first (filter by-id board))
        not-revealed-by-face #(and (= (:face tile) (:face %))
                                   (not (:revealed? %)))
        removed (remove by-id board)
        all-revealed? (empty? (filter not-revealed-by-face removed))]
    (-> (assoc tile :revealed? all-revealed?)
        (cons removed))))

(defn hidden
  [app {:keys [x y id disable-click?]}]
  [:rect
   {:fill "grey"
    :width 0.9
    :height 0.9
    :key id
    :x x
    :y y
    :on-click
    (if (not disable-click?)
      (fn hidden-click
        [e]
        (swap! app update-in [:board] (partial reveal id))
        (js/setInterval #(swap! app update-in [:board] (partial hide id)) 6000))
      #())}])

(defn visible
  [{:keys [x y id image]}]
  [:image
   {:href image
    :width 0.9
    :height 0.9
    :key id
    :x x
    :y y}])

(defn view-box
  [width height cols rows]
  [:svg
   {:view-box (str "0 0 " cols " " rows)
    :width width
    :height height}])

(defn matchitmon
  [app]
  (let [{:keys [height width board]} @app]
    (into
      (view-box width height (inc (:x (apply max-key :x board))) (inc (:y (apply max-key :y board))))
      (for [tile board]
        (if (:revealed? tile)
          (visible tile)
          (hidden app tile))))))

(reagent/render-component [matchitmon app-state]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
