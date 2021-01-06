var terms = {
	tempo: [
		{term: 'allegro', transleate: 'скоро'},
		{term: 'adagio', transleate: 'медленно'},
		{term: 'andante', transleate: 'спокойным шагом'},
		{term: 'ritenuto', transleate: 'сдерживая'},
		{term: 'a tempo', transleate: 'в темпе'},
		{term: 'vivo', transleate: 'живо'},
		{term: 'alla breve', transleate: 'основная доля такта не четверть, а половина'},
		{term: 'ad libitum', transleate: 'по желанию'},
		{term: 'allegretto', transleate: 'оживлённо'},
		{term: 'andantino', transleate: 'подвижнее, чем andante'},
		{term: 'lento', transleate: 'медленно'},
		{term: 'Tempo I', transleate: 'первоначальный темп'},
		{term: 'piu mosso', transleate: 'более подвижно'},
		{term: 'meno mosso', transleate: 'менее подвижно'},
		{term: 'allegro moderato', transleate: 'умеренно скоро'},
		{term: 'allargando', transleate: 'расширяя'},
		{term: 'accelerando', transleate: 'ускоряя'},
		{term: 'rubato', transleate: 'в свободном темпе'},
		{term: 'presto', transleate: 'быстро'},
		{term: 'con moto', transleate: 'с движением'},
		{term: 'non troppo', transleate: 'не слишком'},
		{term: 'molto', transleate: 'очень'},
		{term: 'sostenuno', transleate: 'сдержанно'},
		{term: 'rallentando', transleate: 'замедляя'},
		{term: 'ritardando', transleate: 'замедляя'},
		{term: 'assai', transleate: 'весьма, очень'},
		{term: 'stringendo', transleate: 'ускоряя'},
	],
	tocco: [
		{term: 'detache', transleate: 'раздельно'},
		{term: 'legato', transleate: 'связно'},
		{term: 'staccato', transleate: 'отрывисто'},
		{term: 'marcato', transleate: 'подчёркивая'},
		{term: 'non legato', transleate: 'не связно'},
		{term: 'portamento', transleate: 'протяжно но не связно'},
		{term: 'tenuto', transleate: 'выдержанно'},
		{term: 'glissando', transleate: 'скользя'},
	],
	dinamica: [
		{term: 'f, forte', transleate: 'громко'},
		{term: 'p, piano', transleate: 'тихо'},
		{term: 'mf, mezzo forte', transleate: 'не очень громко'},
		{term: 'mp, mezzo piano', transleate: 'не очень тихо'},
		{term: 'crecsendo', transleate: 'усиливая'},
		{term: 'diminuendo', transleate: 'стихая'},
		{term: '>', transleate: 'акцент'},
		{term: 'sf', transleate: 'внезапное ударение'},
		{term: 'ff', transleate: 'очень громко'},
		{term: 'pp', transleate: 'очень тихо'},
		{term: 'piu forte', transleate: 'более громко'},
		{term: 'meno forte', transleate: 'менее громко'},
		{term: 'poco', transleate: 'немного'},
		{term: 'poco a poco crecsendo', transleate: 'мало-помалу усиливая'},
		{term: 'poco a poco diminuendo', transleate: 'мало-помалу стихая'},
	],
	simbolo: [

	],
	natura: [
		{term: 'dolche', transleate: 'нежно'},
		{term: 'cantabile', transleate: 'певуче'},
		{term: 'risoluto', transleate: 'решительно'},
		{term: 'leggiero', transleate: 'легко'},
		{term: 'espressivo', transleate: 'выразительно'},
		{term: 'giocoso', transleate: 'весело'},
		{term: 'maestoso', transleate: 'торжественно, величаво'},
		{term: 'simile', transleate: 'точно так, как раньше'},
		{term: 'grave', transleate: 'тяжело'},
		{term: 'morendo', transleate: 'замирая'},
		{term: 'agitato', transleate: 'возбуждёно'},
		{term: 'sempre', transleate: 'всегда, постоянно'},
		{term: 'scherzando', transleate: 'шутливо'},
		{term: 'largo', transleate: 'широко'},
		{term: 'appasionato', transleate: 'страстно'},
		{term: 'grazioso', transleate: 'грациозно'},
		{term: 'animato', transleate: 'воодушевлённо'},
		{term: 'tutti', transleate: 'все участники оркестро, хора, ансамбля'},
		{term: 'pesante', transleate: 'тяжело'},
		{term: 'subito', transleate: 'внезапно'},
		{term: 'brilliante', transleate: 'блестяще'},
		{term: 'energico', transleate: 'энергично'},
	]
}