<button ng-click="social_media()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Social Media</button>
<button ng-click="popular_album()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Popular Albums</button>
<br /><br />
<div class="container">
  <h2 class="text-center">Custom Playlist Videos</h2>
  <p class="text-center">We have retrieved 8 videos for you based on similar artists</p>
</div>
<table class="table">
	<tr>
		<th>Title</th>
		<th>Artist</th>
		<th>Album</th>
		<th>Release Year</th>
		<th>Link</th>
	</tr>
	<tr ng-repeat="video in videos | orderBy: '-original_release_year'">
		<td>{{video.title}}</td>
		<td>{{video.artist_name}}</td>
		<td>{{video.album_title}}</td>
		<td>{{video.original_release_year}}</td>
		<td><a target="_blank" href="https://youtube.com/watch?v={{video.track_youtube_id}}">Video</a></td>
	</tr>
</table>
