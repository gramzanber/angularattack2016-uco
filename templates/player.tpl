<div class="container">
	<div class="col-xs-6 col-xs-offset-3">
		<audio id="audioPlayer" src="" controls style="width:100%"><p>Failed to load... </p></audio>
	</div> 
	<br/><br/>
	<table class="table table-striped table-bordered">
		<tr>
			<th>Artist</th>
			<th>Title</th>
			<th>Album</th>
			<th>Release Date</th>
			<th>Source</th>
		</tr>
		<tr ng-repeat="song in songs"> 
			<td>{{song.artist}}</td>
			<td>{{song.title}}</td>
			<td>{{song.album}}</td>
			<td>{{song.year}}</td>
			<td>{{song.url}}</td>
		</tr>
	</div>
</div>
