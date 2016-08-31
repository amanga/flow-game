// Initialize your app
var myApp = new Framework7({
	
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
		console.log("Refreshing.......");
		myApp.pullToRefreshDone();
	},2000);
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('search', function (page) {
    // run createContentPage func after link was clicked
    // $$('.create-page').on('click', function () {
        // createContentPage();
    // });		
});


function loadDynamicView(val, jsonObj){
	console.log(val);
	// console.log(jsonObj);
	mainView.router.loadPage({
		url: jsonObj.action +"?now="+(new Date()).toString()
	});
}

function search(val){
	console.log(".........."+val);
}

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}