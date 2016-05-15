<button ng-click="social_media()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Social Media</button>
<button ng-click="playlist()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Playlist</button>
<br /><br />
<div class="container">
  <span>Albums:</span>
</div>
<table class="table table-striped table-bordered">
	<tr>
		<th>Title</th>
		<th># of Tracks</th>
		<th>Genre</th>
		<th>Release Date</th>
	</tr>
	<tr ng-repeat="album in albums">
		<td>{{album.title}}</td>
		<td>{{album.number_of_tracks}}</td>
		<td>{{album.main_genre}}</td>
		<td>{{album.release_date}}</td>
	</tr>
</table>