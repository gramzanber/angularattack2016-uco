<div layout="row">
  <div flex>
    <h1 class='col-lg-12'>AngularAttack 2016</h1>
    <label> Username </label>
    <input type="text" style="border-radius:3px"/>
    <br />
    <label> Password </label>
    <input type="text" style="border-radius:3px"/>
    <br />
    <input type="button" value="Login" ng-click="login()">
    <input type="button" value="Register" ng-click="register_new_user()">
    <br />
    <a href="https://www.angularattack.com"> About </a>
  </div>
  <div class="col-lg-6 col-lg-offset-3">
      <form >
        <div class="input-group input-group-sm">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-user"></span>
            </span>
            <input class="form-control" ng-model="user" type="text" placeholder="User Name..." autofocus required>
        </div><br>
        <div class="input-group input-group-sm">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-lock"></span>
            </span>
            <input class="form-control" ng-model="password" type="password" placeholder="Password..." required>
        </div><br>
        <button ng-click="authenticate(user,password)"class="btn btn-success" style="width: 100%" type="submit">Login</button>
    </form>
    <a ng-click="register()" class="btn btn-primary" style="width: 100%">Register</a>
  </div>  
</div>
