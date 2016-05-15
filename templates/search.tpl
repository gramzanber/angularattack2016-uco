<div class="col-xs-6 col-xs-offset-3">
  <h1 class="text-center"> <strong>LOGIN</strong> </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-music"></span>
      </span>
      <input class="form-control" ng-model="user" type="text" placeholder="Search for anything (music related)..." autofocus required>
    </div>
    <br />
    <button ng-click="authenticate(user,password)" class="btn btn-primary" style="width: 100%; background-color: #7A3014" type="submit">Search for music like a champ!</button>
  </form>
</div>
