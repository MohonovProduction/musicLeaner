<div id="app">
	<header>
		<p class="attention" v-show="appIsNotWorking">Attention! Undermaintanance</p>
		<p class="attention" v-show="attention">For First Class terms in nature is not found. Please change your settings</p>
	</header>

	<main>
		<section class="app-section">
			<div
				v-bind:class="{
					card: true, 
					correct: styleSetUp[4] == 1, 
					incorrect: styleSetUp[4] == 2
				}" 
				v-on:click="genTerm"
				>
				<img v-bind:src="termSymbol" class="term">
				<p class="term" v-if="hello">Нажми, что бы учить</p>
				<p class="term" v-if="!hello">{{term}}</p>
			</div>

			<transition name="fade">
				<div class="buttons" v-if="show">
					<button 
						v-bind:class="{
							button: true, 
							correct: styleSetUp[id] == 1, 
							incorrect: styleSetUp[id] == 2
						}" 
						v-for="(option, id) of options"
						v-on:click="checkAnswer(id)"
						>
						{{ options[id] }}
					</button>
				</div>
			</transition>
		</section>

	</main>

	<aside v-bind:class="{menu: true, 'menu-active':  showMenu}">

		<button class="close" v-on:click="showMenu = !showMenu">
			<span v-if="showMenu">✖</span>
			<svg class="icon" v-if="!showMenu">
			  <use xlink:href="#setting"></use>
			</svg>
		</button>

		<div class="menu">
			<div class="menu-setting-block">
				<h2 class="menu">Какой тип терминов использовать в коллекции?</h2>
				<select class="menu" v-model="settingTerms">
					<option value="5">Все</option>
					<option value="0">Темп</option>
					<option value="1">Ритм</option>
					<option value="2">Динамика</option>
					<option value="3">Условные обозначения</option>
					<option value="4">Характер исполнения</option>
				</select>
			</div>

			<div class="menu-setting-block">
				<h2 class="menu">Термины для какого класса использовать в коллекции?</h2>
				<select class="menu" v-model="settingClass">
					<option v-for="(terms, id) in termsBase" v-bind:value="id">{{termsBaseClass[id]}}</option>
				</select>
			</div>

		</div>
	</aside>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="../scripts/app.js"></script>