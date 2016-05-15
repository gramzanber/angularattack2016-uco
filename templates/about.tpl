<div class="container">
  <div ng-repeat="programmer in programmers">
    <div>
      <img src="{{programmer.picture}}" />
    </div>
    <div>
      Name: {{programmer.name}}
    </div>
    <div>
      Bio: {{programmer.bio}}
    </div>
  </div>
</div>
