<div class="container col-xs-6 col-xs-offset-3" style="background-color:#212121; color:white; border-radius: 10px; padding:10px; margin-bottom: 20px">
  <h2 class="text-center"><strong>Custom {{artistName}} Playlist</strong></h2>
  <p class="text-center" style="font-size:10px">
	<i class="glyphicon glyphicon-info-sign"></i>
	We have retrieved 5 songs that we think you may like based on the selected artist/band's style of music.
  </p>
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
