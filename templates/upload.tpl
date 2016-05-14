<div class="col-xs-6 col-xs-offset-3">
  <h1 class="text-center"> UPLOAD YOUR MUSIC </h1>
  <form>
	<div style="border: groove; border-radius: 5px; padding: 10px">
    <label>Browse for a local file</label>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="Song" type="file" placeholder="Browse for file..." autofocus>
    </div>
    <label>OR</label>
    <br />
    <label>Paste in a weblink</label>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-circle-arrow-down"></span>
      </span>
      <input class="form-control" ng-model="Source" type="text" placeholder="Source">
    </div>
	</div>
    <br />
	<div style="border: groove; border-radius: 5px; padding: 10px">
    <label>Optional but useful sorting information</label>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-user"></span>
      </span>
      <input class="form-control" ng-model="Artist" type="text" placeholder="Artist">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-list-alt"></span>
      </span>
      <input class="form-control" ng-model="Album" type="text" placeholder="Album">
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
      <input class="form-control" ng-model="Release_Date" type="text" placeholder="Release Date">
    </div>
    <br />

    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-picture"></span>
      </span>
      <input class="form-control" ng-model="Album_Art" type="file" placeholder="Album Art">
    </div>
	</div>
  </form>
  <a ng-click="add_song()" class="btn btn-primary" style="width: 100%; background-color: #301C16; margin-bottom: 20px">Upload</a>
</div>
