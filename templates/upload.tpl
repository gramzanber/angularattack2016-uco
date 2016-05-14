<div class="container-fluid">
  <h1 class="text-center"> Upload a song here </h1>
  <form>
    Browse for a local file
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="Song" type="file" placeholder="Browse for file..." autofocus>
    </div>
    OR
    <br />
    Paste in a weblink
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-circle-arrow-down"></span>
      </span>
      <input class="form-control" ng-model="Source" type="text" placeholder="Source">
    </div>
    <br />
    Optional but useful sorting information
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
  </form>
  <a ng-click="add_song()" class="btn btn-primary" style="width: 100%">Upload</a>
</div>
