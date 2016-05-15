<button ng-click="popular_album()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Popular Albums</button>
<button ng-click="playlist()" class="btn btn-primary" style="width: 49%; background-color: #7A3014">Playlist</button>
<br /><br />

<div ng-if="links" class="container" style="text-align:center;" class="thumbnail">
	<label class="text-center" style="width:100%">Framed Links</label>
	<a ng-if="links.official" data-toggle="collapse" data-target="#official" class="image">
		<img src="/images/Manager-48.png" alt="Official Site">
	</a>	
	<a ng-if="links.spotify" data-toggle="collapse" data-target="#spotify" class="image">
		<img src="/images/Spotify-48.png" alt="Spotify" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.vevo" data-toggle="collapse" data-target="#vevo" class="image">
		<img src="/images/Vevo-48.png" alt="Vevo" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.wiki" data-toggle="collapse" data-target="#wiki" class="image">
		<img src="/images/Wikipedia-48.png" alt="Wikipedia" style="width:70px;height:70px;border:0;">
	</a>
</div>

<div ng-if="links" class="container" style="text-align:center;" class="thumbnail">
	<label class="text-center" style="width:100%">Outer Links</label>
	<a ng-if="links.lastfm" target="_blank" href="{{links.lastfm}}" class="image">
		<img src="/images/Lastfm-48.png" alt="Last.fm" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.youtube" target="_blank" href="{{links.youtube}}" class="image">
		<img src="/images/Youtube-48.png" alt="Youtube" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.facebook" target="_blank" href="{{links.facebook}}" class="image">
		<img src="/images/Facebook-48.png" alt="Facebook" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.twitter" target="_blank" href="{{links.twitter}}" class="image">
		<img src="/images/Twitter-48.png" alt="Twitter" style="width:70px;height:70px;border:0;">
	</a>
	<a ng-if="links.instagram" target="_blank" href="{{links.instagram}}" class="image">
		<img src="/images/Instagram-48.png" alt="Instagram" style="width:70px;height:70px;border:0;">
	</a>
</div>

<div class="container">
	<iframe class="collapse" id="official" style="width:100%; min-height: 500px" ng-src="{{links.official}}"></iframe>
	<iframe class="collapse" id="spotify" style="width:100%; min-height: 500px" ng-src="{{links.spotify}}"></iframe>
	<iframe class="collapse" id="vevo" style="width:100%; min-height: 500px" ng-src="{{links.vevo}}"></iframe>
	<iframe class="collapse" id="wiki" style="width:100%; min-height: 500px" ng-src="{{links.wiki}}"></iframe>
</div>