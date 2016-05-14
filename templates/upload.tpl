<div class="container-fluid">
  <h1 class="text-center"> Upload a song here </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="Song" type="file" placeholder="Browse for file..." autofocus required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-user"></span>
      </span>
      <input class="form-control" ng-model="Artist" type="text" placeholder="Artist" required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-list-alt"></span>
      </span>
      <input class="form-control" ng-model="Album" type="text" placeholder="Album" required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
      <input class="form-control" ng-model="Release_Date" type="text" placeholder="Release Date" required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-circle-arrow-down"></span>
      </span>
      <input class="form-control" ng-model="Source" type="text" placeholder="Source" required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-picture"></span>
      </span>
      <input class="form-control" ng-model="Album_Art" type="file" placeholder="Album Art" required>
    </div>
  </form>
  <a ng-click="add_song()" class="btn btn-primary" style="width: 100%">Upload</a>
</div>
