/* @license
 *
 * © 2021 Daniel Aleksandersen <https://www.daniel.priv.no/>
 * SPDX-License-Identifier: Apache-2.0
 *
 * © 2016–2017 The New York Times Company <https://www.nytco.com/>
 * SPDX-License-Identifier: Apache-2.0
 */

(function () {
  // initializes recursive binary search
  function balanceText(element) {
    if (textElementIsMultipleLines(element)) {
      element.style.maxWidth = null;
      var width = element.parentElement.clientWidth;
      var bottomRange = Math.max(100, parseInt(width / 2));
      squeezeContainer(element, element.clientHeight, bottomRange, width);
    }
    // reveal text; paired with the .balance-text class that hides text
    element.classList.replace("balance-text", "balanced-text");
  }

  // Make the headline element as narrow as possible while maintaining its current height (number of lines). Binary search.
  function squeezeContainer(headline, originalHeight, bottomRange, topRange) {
    var mid;
    if (bottomRange + 4 >= topRange) {
      headline.style.maxWidth = Math.ceil(topRange) + "px";
      return;
    }
    mid = (bottomRange + topRange) / 2;
    headline.style.maxWidth = mid + "px";

    if (headline.clientHeight > originalHeight) {
      // we've squoze too far and headline has spilled onto an additional line; recurse on wider range
      squeezeContainer(headline, originalHeight, mid, topRange);
    } else {
      // headline has not wrapped to another line; keep squeezing!
      squeezeContainer(headline, originalHeight, bottomRange, mid);
    }
  }

  // check if element text spans multiple lines
  var textElementIsMultipleLines = function (element) {
    var elementStyles = window.getComputedStyle(element);
    var elementLineHeight = parseInt(elementStyles["line-height"], 10);
    var elementHeight = parseInt(elementStyles["height"], 10);
    return elementLineHeight < elementHeight;
  };

  function prepHeadlines() {
    var candidates = document.querySelectorAll(
      ".balance-text, .balance-content h2, .balance-content h3, .balance-content h4, .balance-content p, .article-text h2, .article-text h3, .page-text h2, .page-text h3"
    );

    console.log(candidates);

    candidates.forEach(function (toWrap) {
      const wrapper = document.createElement("div");
      wrapper.classList.add(`balance-wrapper-${toWrap.tagName.toLowerCase()}`);
      toWrap.parentNode.insertBefore(wrapper, toWrap);
      toWrap.classList.add("balance-text");
      return wrapper.appendChild(toWrap);
    });
  }

  function initialize() {
    // future-proofing: the browser natively supports text balancing
    if (window.CSS && CSS.supports("text-wrap", "balance")) {
      return;
    }

    prepHeadlines();

    var candidates = document.querySelectorAll(".balance-text");

    if (window.ResizeObserver) {
      const observer = new ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          let elements = entry.target.querySelectorAll(
            ".balance-text,.balanced-text"
          );
          for (let element of elements) {
            balanceText(element);
          }
        });
      });
      for (let element of candidates) {
        observer.observe(element.parentElement);
      }
    } else {
      for (let element of candidates) {
        balanceText(element);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();

// timer-based fallback if text doesn’t appear after three seconds
(function () {
  function revealText() {
    var texts = document.querySelectorAll(".balance-text");
    if (texts) {
      for (var index = 0; index < texts.length; index++) {
        var text = texts[index];
        if (text.classList) {
          // classList.replace isn’t supported in older browsers
          text.classList.remove("balance-text");
          text.classList.add("balanced-text");
        }
      }
    }
  }

  setTimeout(revealText, 3000);
})();
