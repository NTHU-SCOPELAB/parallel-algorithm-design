// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Introduction</li><li class="chapter-item expanded "><a href="01-introduction/flynn.html"><strong aria-hidden="true">1.</strong> Flynn&#39;s Classification</a></li><li class="chapter-item expanded "><a href="01-introduction/schwartz.html"><strong aria-hidden="true">2.</strong> Schwartz&#39;s Classification</a></li><li class="chapter-item expanded "><a href="01-introduction/performance.html"><strong aria-hidden="true">3.</strong> Performance of Parallel Algorithms</a></li><li class="chapter-item expanded "><a href="01-introduction/shared-memory-categorization.html"><strong aria-hidden="true">4.</strong> Categorization of shared-memory computers</a></li><li class="chapter-item expanded affix "><li class="part-title">Basic Techniques in PRAM model</li><li class="chapter-item expanded "><a href="02-basic-techniques/parallel-strategies.html"><strong aria-hidden="true">5.</strong> Parallel Strategies</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/divide-and-conquer.html"><strong aria-hidden="true">5.1.</strong> Divide and Conquer</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/doubling.html"><strong aria-hidden="true">5.2.</strong> Doubling (pointer-jumping)</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/partitioning.html"><strong aria-hidden="true">5.3.</strong> Partitioning</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/pipelining.html"><strong aria-hidden="true">5.4.</strong> Pipelining</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/euler-tour.html"><strong aria-hidden="true">5.5.</strong> Euler Tour</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/strategies/tree-contraction.html"><strong aria-hidden="true">5.6.</strong> Tree Contraction</a></li></ol></li><li class="chapter-item expanded "><a href="02-basic-techniques/cost-saving.html"><strong aria-hidden="true">6.</strong> Cost Saving Techniques</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02-basic-techniques/cost-saving/accelerated-cascading.html"><strong aria-hidden="true">6.1.</strong> Accelerated Cascading</a></li><li class="chapter-item expanded "><a href="02-basic-techniques/cost-saving/brent-theorem.html"><strong aria-hidden="true">6.2.</strong> Brent Theorem</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
