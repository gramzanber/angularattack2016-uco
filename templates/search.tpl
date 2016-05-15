<div class="col-xs-4 col-xs-offset-4">
  <h1 class="text-center"> <strong>Find artist info</strong> </h1>
  <form style="margin-top:40px">
    <div id="test" class="input-group input-group-sm">
      <input type="text" class="form-control" ng-change="onedit(param)" ng-model="param" uib-typeahead="param for param in states | filter:$viewValue:startsWith" placeholder="Type your favorite artist or band.." autofocus required>
      <span class="input-group-addon" ng-click="search(param)">
        <span class="glyphicon glyphicon-music"></span>
      </span>
    </div>
    <br />
    <button ng-click="search(param)" class="btn btn-primary" style="width: 100%; background-color: #301C16" type="submit">SEARCH</button>
  </form>
</div>
