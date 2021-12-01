(defun read-lines (file)
  "Read the contents of FILE into a string."
  (with-temp-buffer
    (insert-file-contents file)
    (split-string (buffer-string) "\n" t))) ; Trim and Split the file

(defvar aoc-input
  (mapcar 'string-to-number (read-lines "input.txt")))

(defun solve1 (input)
  (let ((increases 0) (i 0))
    (while (< i (-(length input) 1))
      (when (< (elt input i) (elt input (1+ i)))
        (setq increases (+ 1 increases)))
      (setq i (1+ i)))
    increases))

(defun calc_window (input index)
  (+ (elt input index) (+ (elt input (+ index 1)) (elt input (+ index 2)))))

(defun solve2 (input)
  (let ((increases 0) (i 0))
    (while (< i (-(length input) 3))
      (when (< (calc_window input i) (calc_window input (1+ i)))
        (setq increases (+ 1 increases)))
      (setq i (1+ i)))
    increases))

(defvar aoc-part (getenv "part"))
(message
 (cond ((string= aoc-part "part1") (number-to-string (solve1 aoc-input)))
       ((string= aoc-part "part2") (number-to-string (solve2 aoc-input)))))

(provide 'aoc)
;;; aoc.el ends here
