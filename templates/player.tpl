<div class="container">
	<div class="col-xs-6 col-xs-offset-3">
		<audio id="audioPlayer" src="{{currentSong}}" controls style="width:100%"><p>Failed to load... </p></audio>
	</div>
	<br/><br/><br/><br/>
	<table class="table table-striped table-bordered">
		<tr>
			<th>Artist 
			<!-- Music Conductor icon by Icons8 -->
			<img style="float:right" src="https://maxcdn.icons8.com/windows8/PNG/26/Music/music_conductor-26.png" title="Music Conductor" width="26">
			</th>
			<th>Title
			<!-- Audio File icon by Icons8 -->
			<img  style="float:right" src="https://maxcdn.icons8.com/windows8/PNG/26/Files/audio_file-26.png" title="Audio File" width="26">
			</th>
			<th>Album 
			<!-- Music Record icon by Icons8 -->
			<img style="float:right" src="https://maxcdn.icons8.com/windows8/PNG/26/Music/music_record-26.png" title="Music Record" width="26">
			</th>
			<th>Release Date 
			<!-- Tear Off Calendar icon by Icons8 -->
			<img style="float:right" src="https://maxcdn.icons8.com/windows8/PNG/26/Time_And_Date/tear_off_calendar-26.png" title="Tear Off Calendar" width="26">
			</th>
			<th>Source 
			<!-- Cloud Filled icon by Icons8 -->
			<img style="float:right" src="https://maxcdn.icons8.com/iOS7/PNG/25/Network/shared_filled-25.png" title="Cloud Filled" width="25">
			</th>
		</tr>
		<tr ng-repeat="song in songs" ng-click="play(song)">
			<td>{{song.artist}}</td>
			<td>{{song.title}}</td>
			<td>{{song.album}}</td>
			<td>{{song.year}}</td>
			<td>{{song.url}}</td>
		</tr>
	</table>
</div>
