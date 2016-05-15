<button ng-click="social_media()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Social Media</button>
<button ng-click="popular_album()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Popular Albums</button>
<br /><br />
<div class="container">
	
<iframe width="420" height="315"
src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
</iframe>

	<table class="table table-bordered" style="width:70%; margin-left:15%; table-layout: fixed; background-color:rgb(71,71,71); color: white; border-radius:0 0 10px 10px">
		<tr>
			<th style="text-align:center">Play</th>
			<th style="text-align:center">Artist</th>
			<th style="text-align:center">Title</th>
			<th style="text-align:center">Album</th>
			<th style="text-align:center">Date</th>
			<th style="text-align:center">Source</th>
		</tr>
		<tr ng-repeat="song in songs">
			<td ng-click="playSong(song)">
				<i ng-show="song.paused" class="glyphicon glyphicon-play" style="margin-left:40%; margin-top: 10%"></i>
				<i ng-show="!song.paused" class="glyphicon glyphicon-pause" style="margin-left:40%; margin-top: 10%"></i>
			</td>
			<td>{{song.artist}}</td>
			<td>{{song.title}}</td>
			<td>{{song.album}}</td>
			<td style="text-align:center">{{song.year}}</td>
			<td><a style="color:white" href="{{song.url}}"><i style="margin-left:40%; margin-top: 10%" class="glyphicon glyphicon-link"></i></a></td>
		</tr>
	</table>
</div>
