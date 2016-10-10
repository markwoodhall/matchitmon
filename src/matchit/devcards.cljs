(ns ^:figwheel-always matchit.devcards
  (:require [matchit.core :refer [board matchitmon reveal hide hidden visible view-box]]
            [devcards.core :refer-macros [deftest]]
            [cljs.test :refer-macros [is]]
            [reagent.core :refer [atom]])
  (:require-macros
    [devcards.core :refer [defcard defcard-rg]]))

(enable-console-print!)

(defonce default-board (atom {:board (board 4) :height 600 :width 900}))
(defcard-rg default-matchitmon
  "A default matchitmon board is 6x4, there are 4 instances of each unique pokemon tile, if all 4 are revealed
  at the same time then they will stay revealed, otherwise after 6 seconds each one will be hidden again."
  [matchitmon default-board]
  default-board
  {:history true})

(defonce default-board-tile-revealed (atom {:board (reveal 1 (board 4)) :height 600 :width 900}))
(defcard-rg default-matchitmon-tile-revealed
  "A default mathictmon board with a tile revealed."
  [matchitmon default-board-tile-revealed]
  default-board-tile-revealed
  {:history true})

(defonce default-board-all-tiles-revealed (atom {:board (reveal (board 4)) :height 600 :width 900}))
(defcard-rg default-matchitmon-all-tiles-revealed
  "A default mathictmon board with all tiles revealed."
  [matchitmon default-board-all-tiles-revealed]
  default-board-all-tiles-revealed
  {:history true})

(defonce large-board (atom {:board (board (* 10 2)) :height 600 :width 900}))
(defcard-rg large-matchitmon
  "A large matchitmon board"
  [matchitmon large-board]
  large-board
  {:history true})

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