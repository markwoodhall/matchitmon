(ns ^:figwheel-always matchit.core
  (:require
    [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defn- ->row
  [row tiles]
  (map-indexed
    #(-> %2
         (assoc :x %1)
         (assoc :y row)) tiles))

(defn- ->id
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

(defonce app-state (atom {:board (board 4) :width 900 :height 600 :ms-til-hide 6000}))

(defn- get-tile
  [id board]
  (first (filter #(= id (:id %)) board)))

(defn- remove-tile
  [id board]
  (remove #(= id (:id %)) board))

(defn- hidden-tiles-by-face
  [face board]
  (filter #(and (= (:face %) face)
                (not (:revealed? %))) board))

(defn reveal
  ([board]
   (map #(assoc % :revealed? true) board))
  ([id board]
   (let [removed (remove-tile id board)]
     (-> (get-tile id board)
         (assoc :revealed? true)
         (cons removed)))))

(defn hide
  [id board]
  (let [{:keys [face] :as tile} (get-tile id board)
        removed (remove-tile id board)
        hidden-by-face (hidden-tiles-by-face face removed)
        all-revealed? (empty? hidden-by-face)]
    (-> tile
        (assoc :revealed? all-revealed?)
        (cons removed))))

(defn hidden
  [{:keys [ms-til-hide] :as app :or {ms-til-hide 6000}} {:keys [x y id]}]
  [:rect
   {:fill "grey"
    :width 0.9
    :height 0.9
    :key id
    :x x
    :y y
    :on-click
    (fn hidden-click
      [e]
      (swap! app update-in [:board] (partial reveal id))
      (js/setInterval #(swap! app update-in [:board] (partial hide id)) ms-til-hide))}])

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
      (for [{:keys [revealed?] :as tile} board]
        (if revealed?
          (visible tile)
          (hidden app tile))))))

(defonce element (. js/document (getElementById "app")))
(reagent/render-component [matchitmon app-state] element)
