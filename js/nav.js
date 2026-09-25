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
    heading: "C# Concepts",
    pages: [
      { title: "Value & Reference Types", path: "csharp/value-vs-reference.html" },
      { title: "Fields, Properties & Modifiers", path: "csharp/members.html" },
      { title: "Inheritance & Interfaces", path: "csharp/inheritance.html" },
      { title: "Types & Type Checking", path: "csharp/types.html" },
      { title: "Exceptions & try/catch", path: "csharp/exceptions.html" },
      { title: "Null & Nullable Types", path: "csharp/null.html" },
      { title: "Generics", path: "csharp/generics.html" },
      { title: "Collections", path: "csharp/collections.html" },
      { title: "LINQ", path: "csharp/linq.html" },
      { title: "Delegates, Lambdas & Events", path: "csharp/delegates-events.html" },
      { title: "Iterators & yield", path: "csharp/iterators.html" },
      { title: "async & await", path: "csharp/async-await.html" },
      { title: "Enums & switch", path: "csharp/enums.html" },
      { title: "Strings & Formatting", path: "csharp/strings.html" },
      { title: "Extension Methods", path: "csharp/extension-methods.html" },
      { title: "Attributes", path: "csharp/attributes.html" }
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
    heading: "HLSL & Shaders",
    pages: [
      { title: "Your First HLSL Shader", path: "hlsl/first-shader.html" },
      { title: "Camera-facing Billboards", path: "hlsl/billboards.html" }
    ]
  },
  {
    heading: "Guides",
    pages: [
      { title: "Procedural Meshes without GameObjects", path: "guides/procedural-meshes.html" },
      { title: "Dot, Cross & Reflect", path: "guides/vector-math.html" },
      { title: "Working with CharacterController", path: "guides/character-controller.html" },
      { title: "URP & Post-processing", path: "guides/urp-post-processing.html" },
      { title: "UI & TextMeshPro in Depth", path: "guides/ui-tmp.html" },
      { title: "NavMesh in Depth", path: "guides/navmesh.html" },
      { title: "Working with Particle Systems", path: "guides/particle-systems.html" },
      { title: "Update & FixedUpdate", path: "guides/update-fixedupdate.html" },
      { title: "Interpolation & Easing", path: "guides/interpolation.html" },
      { title: "Bezier Curves", path: "guides/bezier-curves.html" },
      { title: "Better Ways to Do Things", path: "guides/best-practices.html" }
    ]
  },
  {
    heading: "Building Systems",
    pages: [
      { title: "Building Your Own Systems", path: "guides/your-own-systems.html" },
      { title: "Simple State Machines", path: "guides/state-machines.html" },
      { title: "Saving & Loading Games", path: "guides/save-load.html" }
    ]
  },
  {
    heading: "Performance",
    pages: [
      { title: "Optimization Best Practices", path: "guides/optimization-practices.html" },
      { title: "Optimizing Your Code", path: "guides/optimization.html" },
      { title: "Object Pooling", path: "guides/object-pooling.html" },
      { title: "GPU Instancing & Batching", path: "guides/gpu-instancing.html" }
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
      { title: "Matrix4x4", path: "api/matrix4x4.html" },
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
      { title: "Free Libraries Worth Knowing", path: "guides/libraries.html" },
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
  var isHome = current === "index.html";

  var html = '<input type="search" id="nav-search" placeholder="Search pages..." aria-label="Search pages">';
  html += '<ul><li><a href="' + root + 'index.html"' + (isHome ? ' class="active" aria-current="page"' : "") + ">Home</a></li></ul>";

  for (var i = 0; i < NAV.length; i++) {
    var group = NAV[i];
    var hasCurrent = false;
    var items = "";
    for (var j = 0; j < group.pages.length; j++) {
      var p = group.pages[j];
      var active = p.path === current;
      if (active) hasCurrent = true;
      items += '<li><a href="' + root + p.path + '"' + (active ? ' class="active" aria-current="page"' : "") + ">" + p.title + "</a></li>";
    }
    // Open the group that holds the current page. On the home page, open the first group.
    var open = hasCurrent || (isHome && i === 0);
    var listId = "nav-group-" + i;
    html += '<div class="nav-group' + (open ? "" : " collapsed") + '">' +
      '<h3><button type="button" class="nav-toggle" aria-expanded="' + open + '" aria-controls="' + listId + '">' +
      group.heading + "</button></h3>" +
      '<ul id="' + listId + '">' + items + "</ul></div>";
  }
  html += '<p class="no-results" id="nav-empty" style="display:none">No pages match.</p>';
  sidebar.innerHTML = html;

  // Collapse / expand a group when its heading is clicked.
  var toggles = sidebar.querySelectorAll(".nav-toggle");
  for (var t = 0; t < toggles.length; t++) {
    toggles[t].addEventListener("click", function () {
      var groupEl = this.parentNode.parentNode;
      var collapsed = groupEl.classList.toggle("collapsed");
      this.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  // Search: hide links that don't match, and hide empty groups.
  // While searching, collapsed groups are shown so matches aren't hidden.
  var search = document.getElementById("nav-search");
  search.addEventListener("input", function () {
    var q = search.value.toLowerCase().trim();
    if (q) sidebar.classList.add("searching");
    else sidebar.classList.remove("searching");

    var groups = sidebar.querySelectorAll(".nav-group");
    var anyVisible = false;
    for (var g = 0; g < groups.length; g++) {
      var lis = groups[g].querySelectorAll("li");
      var groupVisible = false;
      for (var k = 0; k < lis.length; k++) {
        var match = lis[k].textContent.toLowerCase().indexOf(q) !== -1;
        lis[k].style.display = match ? "" : "none";
        if (match) groupVisible = true;
      }
      groups[g].style.display = groupVisible ? "" : "none";
      if (groupVisible) anyVisible = true;
    }
    document.getElementById("nav-empty").style.display = anyVisible ? "none" : "";
  });

  // Mobile menu button: shows/hides the sidebar on small screens.
  var menuButton = document.getElementById("menu-toggle");
  if (menuButton) {
    menuButton.setAttribute("aria-controls", "sidebar");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.addEventListener("click", function () {
      var isOpen = sidebar.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "Close" : "Menu";
    });
  }
})();
