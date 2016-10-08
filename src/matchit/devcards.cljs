(ns ^:figwheel-always matchit.devcards
  (:require [matchit.core :refer [board matchitmon num-rows reveal hide hidden visible view-box]]
            [devcards.core :refer-macros [deftest]]
            [cljs.test :refer-macros [is]])
  (:require-macros
    [devcards.core :refer [defcard defcard-rg]]))

(enable-console-print!)

(defcard board-with-4-rows
  "A board is sized based on the number of template tiles supported and the number of rows requested.
  Tiles are shuffled for each board requested to create an element of uniqueness for each board."
  (fn [] (board 4)))

(defcard-rg hidden-tile
  "A hidden tile is a solid block of colour."
  (fn [] (into (view-box 400 200 2 1) [(hidden {:x 0 :y 0 :id 1 :disable-click? true})])))

(defcard-rg visible-tile
  "A visible tile has the background image specified, in this case, a pokemon."
  (fn [] (into (view-box 400 200 2 1) [(visible {:x 0 :y 0 :id 1 :image "img/pikachu.png"})])))

(defcard-rg default-matchitmon
  "A default matchitmon board is 6x4, there are 4 instances of each unique pokemon tile, if all 4 are revealed
  at the same time then they will stay revealed, otherwise after 6 seconds each one will be hidden again."
  (fn [] (matchitmon)))

(deftest revealing-a-tile
  (let [new-board (board 2)
        reveal-tile-id 1
        board-with-reveal (reveal reveal-tile-id new-board)
        tile (first (filter #(= (:id %) reveal-tile-id) board-with-reveal))]
    (is (:revealed? tile))))

(deftest hiding-a-tile
  (let [new-board (board 2)
        reveal-tile-id 1
        board-with-reveal (reveal reveal-tile-id new-board)
        board-with-hide (hide reveal-tile-id board-with-reveal)
        tile (first (filter #(= (:id %) reveal-tile-id) board-with-hide))]
    (is (not (:revealed? tile)))))
