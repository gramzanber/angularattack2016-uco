<div class="container-fluid">
  <h1 class="text-center"> Control and maintain users </h1>
	<table class="table table-striped table-bordered">
		<tr>
			<th>User</th>
			<th>Password Reset</th>
			<th>Email</th>
			<th>Number of Songs</th>
			<th>Delete User</th>
      <th>Edit User</th>
		</tr>
		<tr ng-repeat="users in users">
			<td>{{users.username}}</td>
			<td><ng-button ng-click="reset_password({{users.username}})"> Reset Password </ng-button></td>
			<td>{{users.email}}</td>
			<td>{{users.number_songs}}</td>
      <td><ng-button ng-click="edit_user({{users.username}})"> Edit </ng-button></td>
			<td><ng-button ng-click="delete_user({{users.username}})"> Delete </ng-button></td>
		</tr>
	</div>
</div>
