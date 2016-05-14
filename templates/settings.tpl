<div class="col-lg-6 col-lg-offset-3">
  <h1 class="text-center"> View User Settings </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-user"></span>
      </span>
      <input class="form-control" ng-model="username" type="text" value="{{users.username}}" disabled>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input class="form-control" ng-model="password" type="password" placeholder="Update Password...">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input class="form-control" ng-model="password" type="password" placeholder="Retype Updated Password...">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-envelope"></span>
      </span>
      <input class="form-control" ng-model="email" type="email" placeholder="Update Email address...">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-envelope"></span>
      </span>
      <input class="form-control" ng-model="email" type="email" placeholder="Retype Updated email address...">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="number_songs" type="text" value="{{users.number_songs}}" disabled>
    </div>
		<br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="favorite_song" type="text" value="{{users.favorite_song}}" disabled>
    </div>
  </form>
  <a ng-click="update_user(user)" class="btn btn-primary" style="width: 100%">Save Changes</a>
</div>
<div class="container">
	<h2> SETTINGS </h2>
	<input type="radio"/> Track most played. <br/>
	<input type="radio"/> Keep last played song in player. <br/>
</div>
