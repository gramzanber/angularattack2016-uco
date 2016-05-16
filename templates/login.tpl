<div class="col-xs-6 col-xs-offset-3">
  <h1 class="text-center"> <strong>LOGIN</strong> </h1>
  <form>
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-user"></span>
      </span>
      <input class="form-control" ng-model="user" type="text" placeholder="User Name..." autofocus required>
    </div>
    <br />
    <div class="input-group input-group-sm">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-lock"></span>
      </span>
      <input class="form-control" ng-model="password" type="password" placeholder="Password..." required>
    </div>
    <br />
    <button ng-click="authenticate(user,password)" class="btn btn-primary" style="width: 100%; background-color: #7A3014" type="submit">Login</button>
  </form>
  <a ng-click="register()" class="btn btn-success" style="width: 100%; background-color: #301C16">Register</a>
</div>