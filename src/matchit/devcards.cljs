(ns ^:figwheel-always matchit.devcards
  (:require [matchit.core :refer [board matchitmon reveal hide hidden visible view-box]]
            [devcards.core :refer-macros [deftest]]
            [cljs.test :refer-macros [testing is]]
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

(deftest creating-a-board
  "Creating boards."
  (testing
    "A new board should have no revealed tiles."
    (is (= 0 (count (filter #(:revealed? %) (board 4))))))
  (testing
    "A new board shoud have tiles with incremental ids."
    (is (= [0 1 2 3 4 5] (map :id (board 1)))))
  (testing
    "A new board shoud have tiles with incremental x and y positions."
    (is (= [{:x 0 :y 0} {:x 1 :y 0} {:x 2 :y 0} {:x 3 :y 0}
            {:x 4 :y 0} {:x 5 :y 0} {:x 0 :y 1} {:x 1 :y 1}
            {:x 2 :y 1} {:x 3 :y 1} {:x 4 :y 1} {:x 5 :y 1}] (map #(select-keys % [:x :y]) (board 2)))))
  (testing
    "A new board with 1 row should result in a unique board 80% of the time."
    (is (<= 80 (count (set (repeatedly 100 #(board 1)))))))
  (testing
    "A new board with 2 rows should result in a unique board 99% of the time."
    (is (<= 99 (count (set (repeatedly 100 #(board 2))))))))

(deftest revealing-a-tile
  "Revealing a tile should set `:revealed? true`."
  (let [new-board (board 2)
        reveal-tile-id 1
        board-with-reveal (reveal reveal-tile-id new-board)
        tile (first (filter #(= (:id %) reveal-tile-id) board-with-reveal))]
    (is (:revealed? tile))))

(deftest hiding-a-tile
  "Hiding a tile should set `:revealed? false`."
  (testing "Hiding a tile when no others with the same face are revealed."
    (let [new-board (board 2)
          reveal-tile-id 1
          board-with-reveal (reveal reveal-tile-id new-board)
          board-with-hide (hide reveal-tile-id board-with-reveal)
          tile (first (filter #(= (:id %) reveal-tile-id) board-with-hide))]
      (is (not (:revealed? tile))))))

(deftest hiding-a-tile-with-related-reveals
  "Hiding a tile should leave `:revealed? true`."
  (testing "Hiding a tile when all others with the same face are revealed."
    (let [new-board (board 2)
          same-face-tiles (map :id (filter #(= (:face %) :pikachu) new-board))
          board-with-reveals (reveal (first same-face-tiles) new-board)
          board-with-reveals (reveal (last same-face-tiles) board-with-reveals)
          board-with-hide (hide (last same-face-tiles) board-with-reveals)
          tile (first (filter #(= (:id %) (last same-face-tiles)) board-with-hide))]
      (is (:revealed? tile)))))
