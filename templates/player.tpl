<div class="container">
	<div class="col-xs-6 col-xs-offset-3">
		<audio id="audioPlayer" src="{{currentSong}}" controls style="width:100%"><p>Failed to load... </p></audio>
	</div> 
	<br/><br/><br/><br/>
	<table class="table table-striped table-bordered">
		<tr>
			<th>Artist</th>
			<th>Title</th>
			<th>Album <i class="glyphicon glyphicon-cd" style="float:right"></i></th>
			<th>Release Date <i class="glyphicon glyphicon-calendar" style="float:right"></i></th>
			<th>Source <i class="glyphicon glyphicon-cloud" style="float:right"></i></th>
		</tr>
		<tr ng-repeat="song in songs" ng-click="play(song)"> 
			<td>{{song.artist}}</td>
			<td>{{song.title}}</td>
			<td>{{song.album}}</td>
			<td>{{song.year}}</td>
			<td>{{song.url}}</td>
		</tr> 
	</div>
</div>
