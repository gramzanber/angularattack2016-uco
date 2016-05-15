<div class="container">
  <h2 class="text-center"><strong>{{artistName}} - ALBUMS</strong></h2>
</div>
<table class="table">
	<tr>
		<th>Title</th>
		<th># of Tracks</th>
		<th>Genre</th>
		<th>Release Date</th>
	</tr>
	<tr ng-repeat="album in albums | orderBy: '-release_date'">
		<td>{{album.title}}</td>
		<td>{{album.number_of_tracks}}</td>
		<td>{{album.main_genre}}</td>
		<td>{{album.release_date}}</td>
	</tr>
</table>