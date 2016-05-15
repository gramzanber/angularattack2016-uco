<h2 class="text-center"><strong>Hello fellow software and technology enthusiasts!</strong></h2>
<br /><br />
<div class="col-xs-8 col-xs-offset-2">
We are all full-time students attending a public university in Oklahoma where we all expect to graduate with Computer Science
degrees very soon.<br>
We decided to participate in this competition due to our growing passion and interests for web development. We joined <b>AngularAttack</b>
because we would get the chance to learn something new and also have some fun doing so. We believe that this competition delivered on those expectations perfectly!
The scope of our project has changed a few times but we knew that the main theme of our application would involve music.<br><br>
Our project is a web application that was developed with AngularJs, HTML, and CSS.<br>
The only rule as far as the competition was concerned is that we had to use <a href="surge.sh">Surge.sh</a> for hosting which only allows static files.
This was a very interesting tool to use for static web publishing.<br><br>
The scope of the project is to help users learn more about their favorite artists and bandgroups.<br>
For icons used in this app we used <a href="https://icons8.com/">Icon8</a>.<br>
For the data gathered we used <a href="musicgraph.com/#/home">musicGraph's</a> API which is definitely worth looking into if you are interested.<br><br>
We are thankful for the experience that we have gained through this competition and we will all definitely continue to use AngularJs to assist
us in developing applications both professionally and in personal projects.<br><br>
</div>

<div class="col-xs-8 col-xs-offset-2">
<label> Our team members: </label>
<div class="container" style="margin-top:20px">
  <div ng-repeat="programmer in programmers" style="display:inline-flex; margin: 20px">
    <div>
      <img src="{{programmer.picture}}" style="border-radius:5px; min-width:150px; min-height: 150px"/>
    </div>
	<div class="col-xs-4" style="padding-left: 10px; border: groove; border-radius: 10px; max-width:40%">
		<div>
			<label>Name: </label> {{programmer.name}}
		</div>	
		<div>
			<label>Bio: </label> <br>{{programmer.bio}}
		</div>
        <div>
        <a href="https://github.com/{{programmer.githubid}}" target="_blank">
            <img src="/images/Github-48.png"/>
        </a>
        </div>
	</div>
  </div>
</div>
<br />
<b>Thanks for stopping by!</b>
</div>