var home = "http://www.perampokgoogle.com/", // URL lấy kết quả tìm kiếm
perPage = 3; // Số bài muốn hiển thị
//<![CDATA[
$(document).ready(function() {
 $("#perampokgoogle-field input").click(function(c) {
 c.stopPropagation();
 $("#perampokgoogle-field input").keyup(function() {
 var d = $("#perampokgoogle-field input").val(), c = new RegExp(d, "i"), a = '<div class="row">';
 $.ajax({url: home + "feeds/posts/default?alt=json&max-results=10", dataType:"jsonp"}).done(function(e) {
 $.each(e.feed.entry, function(e, b) {
 if ("" != d && -1 != b.title.$t.search(c)) {
 a += '<div class="moc-search-item">';
 if (void 0 != b.media$thumbnail) {
 var f = b.media$thumbnail.url.replace(/\/s([\S]+)\//, "/s36-c/")
 }
 a += '<img src="' + f + '" />';
 a += '<h5><a href="' + b.link[4].href + '">' + b.title.$t + "</a></h5>";
 a += "</div>";
 }
 });
 a += "</div>";
 $("#perampokgoogle-results").html(a);
 });
 });
 });
 $(document).click(function() {
 $("#perampokgoogle-results").html("");
 });
});
