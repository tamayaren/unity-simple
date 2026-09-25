// Builds the sidebar on every page and handles the search filter.
// Vanilla JavaScript only. Works on GitHub Pages and when opening files directly.
//
// To add a page: create the HTML file, then add an entry to NAV below.

var NAV = [
  {
    heading: "Getting Started",
    pages: [
      { title: "What is Unity?", path: "manual/what-is-unity.html" },
      { title: "Your First Script", path: "manual/first-script.html" },
      { title: "Script Lifecycle", path: "manual/script-lifecycle.html" },
      { title: "Prefabs & Spawning", path: "manual/prefabs.html" },
      { title: "Coroutines", path: "manual/coroutines.html" },
      { title: "Physics Basics", path: "manual/physics-basics.html" },
      { title: "Handling Input", path: "manual/input.html" }
    ]
  },
  {
    heading: "Tutorials",
    pages: [
      { title: "UnityEvents in a Game", path: "tutorials/unityevents.html" },
      { title: "Using the Input System", path: "tutorials/input-system.html" },
      { title: "ScriptableObjects in a Game", path: "tutorials/scriptableobjects.html" },
      { title: "Game Feel with DOTween", path: "tutorials/dotween.html" }
    ]
  },
  {
    heading: "Guides",
    pages: [
      { title: "Optimizing Your Code", path: "guides/optimization.html" },
      { title: "Better Ways to Do Things", path: "guides/best-practices.html" }
    ]
  },
  {
    heading: "Core Classes",
    pages: [
      { title: "Object", path: "api/object.html" },
      { title: "GameObject", path: "api/gameobject.html" },
      { title: "MonoBehaviour", path: "api/monobehaviour.html" },
      { title: "Transform", path: "api/transform.html" },
      { title: "ScriptableObject", path: "api/scriptableobject.html" }
    ]
  },
  {
    heading: "Math & Data Types",
    pages: [
      { title: "Vector3", path: "api/vector3.html" },
      { title: "Quaternion", path: "api/quaternion.html" },
      { title: "Mathf", path: "api/mathf.html" }
    ]
  },
  {
    heading: "Physics",
    pages: [
      { title: "Rigidbody", path: "api/rigidbody.html" },
      { title: "Collider", path: "api/collider.html" },
      { title: "Physics", path: "api/physics.html" }
    ]
  },
  {
    heading: "Gameplay Systems",
    pages: [
      { title: "Time", path: "api/time.html" },
      { title: "Input", path: "api/input.html" },
      { title: "Camera", path: "api/camera.html" },
      { title: "Animator", path: "api/animator.html" },
      { title: "AudioSource", path: "api/audiosource.html" },
      { title: "SceneManager", path: "api/scenemanager.html" },
      { title: "PlayerPrefs", path: "api/playerprefs.html" },
      { title: "Debug", path: "api/debug.html" }
    ]
  },
  {
    heading: "Events & Input",
    pages: [
      { title: "UnityEvent", path: "api/unityevent.html" },
      { title: "InputAction", path: "api/inputaction.html" }
    ]
  },
  {
    heading: "Packages",
    pages: [
      { title: "DOTween", path: "api/dotween.html" }
    ]
  }
];

(function () {
  var sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  // data-root tells us how to get back to the site root ("" or "../").
  var root = document.body.getAttribute("data-root") || "";
  var current = document.body.getAttribute("data-page") || "";

  var html = '<input type="search" id="nav-search" placeholder="Search pages..." aria-label="Search pages">';
  html += '<ul><li><a href="' + root + 'index.html"' + (current === "index.html" ? ' class="active"' : "") + ">Home</a></li></ul>";

  for (var i = 0; i < NAV.length; i++) {
    var group = NAV[i];
    html += '<div class="nav-group"><h3>' + group.heading + "</h3><ul>";
    for (var j = 0; j < group.pages.length; j++) {
      var p = group.pages[j];
      var cls = p.path === current ? ' class="active"' : "";
      html += '<li><a href="' + root + p.path + '"' + cls + ">" + p.title + "</a></li>";
    }
    html += "</ul></div>";
  }
  html += '<p class="no-results" id="nav-empty" style="display:none">No pages match.</p>';
  sidebar.innerHTML = html;

  // Search: hide links that don't match, and hide empty groups.
  var search = document.getElementById("nav-search");
  search.addEventListener("input", function () {
    var q = search.value.toLowerCase().trim();
    var groups = sidebar.querySelectorAll(".nav-group");
    var anyVisible = false;
    for (var g = 0; g < groups.length; g++) {
      var items = groups[g].querySelectorAll("li");
      var groupVisible = false;
      for (var k = 0; k < items.length; k++) {
        var match = items[k].textContent.toLowerCase().indexOf(q) !== -1;
        items[k].style.display = match ? "" : "none";
        if (match) groupVisible = true;
      }
      groups[g].style.display = groupVisible ? "" : "none";
      if (groupVisible) anyVisible = true;
    }
    document.getElementById("nav-empty").style.display = anyVisible ? "none" : "";
  });

  // Mobile menu button.
  var toggle = document.getElementById("menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }
})();
