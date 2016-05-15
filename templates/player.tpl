<div class="container">
	<audio id="audioPlayer" ng-src="{{trustSrc(currentSong.source)}}" controls style="width:100%"><p>Failed to load... </p></audio>
	<br /><br />
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
