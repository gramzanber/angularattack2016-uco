<div class="col-lg-6 col-lg-offset-3">
  <h1 class="text-center"> Sign up below to start your music management dreams!!! </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-user"></span>
      </span>
      <input class="form-control" ng-model="user" type="text" placeholder="Desired User Name..." autofocus required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input class="form-control" ng-model="password" type="password" placeholder="Password..." required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input class="form-control" ng-model="password" type="password" placeholder="Retype Password..." required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-envelope"></span>
      </span>
      <input class="form-control" ng-model="email" type="email" placeholder="Email address..." required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-envelope"></span>
      </span>
      <input class="form-control" ng-model="email" type="email" placeholder="Retype email address..." required>
    </div>
  </form>
  <a ng-click="add_user()" class="btn btn-primary" style="width: 100%">Register</a>
</div>
