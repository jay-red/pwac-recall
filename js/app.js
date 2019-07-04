window.mobileAndTabletcheck = function() {
    var check = false;
    ( function( a ) {
        if ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( a.substr( 0, 4 ) ) ) check = true
    } ) ( navigator.userAgent || navigator.vendor || window.opera );
    return check;
}

var seq = [],
	curr = 0,
	i = 0,
	c = 0,
	cs = 0,
	time = 500,
	game = false,
	hov = false,
	br,
	mobile,
	timer,
	goh1,
	goh2Score,
	score,
	goh2Best,
	best,
	playAgain,
	$pizza,
	$rainbow,
	$space,
	$stripes,
	$sC,
	allDoge;
function createEndGame() {
	$sC[ 0 ].innerHTML = '';
	goh1 = document.createElement( 'h1' );
	goh1.innerHTML = 'Game Over';
	goh1.setAttribute( 'class', 'gameOver' );
	goh2Score = document.createElement( 'h2' );
	goh2Score.innerHTML = 'Score';
	goh2Score.setAttribute( 'class', 'score' );
	score = document.createElement( 'span' );
	score.innerHTML = ( curr - 1 ).toString();
	score.setAttribute( 'class', 'num' );
	goh2Best = document.createElement( 'h2' );
	goh2Best.innerHTML = 'Best';
	goh2Best.setAttribute( 'class', 'score' );
	best = document.createElement( 'span' );
	best.innerHTML = ( curr - 1 ).toString();
	best.setAttribute( 'class', 'num' );
	br = document.createElement( 'br' );
	playAgain = document.createElement( 'button' );
	playAgain.innerHTML = 'Play Again';
	playAgain.setAttribute( 'class', 'again' );
	playAgain.setAttribute( 'onclick', 'startGame();' );
	$sC[ 0 ].appendChild( goh1 );
	$sC[ 0 ].appendChild( goh2Score );
	$sC[ 0 ].appendChild( score );
	$sC[ 0 ].appendChild( goh2Best );
	$sC[ 0 ].appendChild( best );
	$sC[ 0 ].appendChild( br );
	$sC[ 0 ].appendChild( playAgain );
}
function startGame() {
	if( !game ) {
		game = true;
		seq = [];
		curr = 0;
		i = 0;
		c = 0;
		cs = 0;
		$sC.fadeOut( 1000 );
		setTimeout( function() {
			createEndGame();
			generate();
			playSeq();
		}, 1000 );
	}
}
function mouseClick( $temp ) {
	if( hov ) {
		play( allDoge.indexOf( $temp ) );
		$temp.css( 'opacity', 0.5 );
		setTimeout( function() {
			$temp.css( 'opacity', 1 );
		}, 200 );
	}
}
function mouseHov( $temp, op ) {
	if( hov ) {
		$temp.css( 'opacity', op );
	}
}
function generate() {
	seq[ curr ] = Math.floor( Math.random() * 4 );
	curr++;
}
function play( x ) {
	if( x != seq[ i ] ) {
		console.log( 'Game over' );
		gameOver();
	} else {
		i++;
		if( i == curr ) {
			i = 0;
			generate();
			playSeq();
		}
	}
}
function playInd() {
	$pizza.css( 'opacity', 1 );
	$rainbow.css( 'opacity', 1 );
	$space.css( 'opacity', 1 );
	$stripes.css( 'opacity', 1 );
	setTimeout( function() {
		cs = seq[ c ];
		console.log( 'lol' );
		switch( cs ) {
			case 0:
				$pizza.css( 'opacity', 0.5 );
				break;
			case 1:
				$rainbow.css( 'opacity', 0.5 );
				break;
			case 2:
				$space.css( 'opacity', 0.5 );
				break;
			case 3:
				$stripes.css( 'opacity', 0.5 );
				break;
			default:
				console.log( 'ERROR' );
				console.log( cs );
		}
		c++;
		if( c == curr ) {
			c = 0;
			clearInterval( timer );
			hov = true;
		}
	}, 100 );
}
function playSeq() {
	hov = false;
	timer = setInterval( function() {
		playInd();
	}, time );
	setTimeout( function() {
		$pizza.css( 'opacity', 1 );
		$rainbow.css( 'opacity', 1 );
		$space.css( 'opacity', 1 );
		$stripes.css( 'opacity', 1 );
	}, time * curr + time );
}
function gameOver() {
	hov = false;
	score.innerHTML = ( curr - 1 ).toString();
	if( !localStorage.getItem( 'best' ) ) {
		localStorage.setItem( 'best', curr - 1 );
	} else if( curr - 1 > localStorage.getItem( 'best' ) ) {
		localStorage.setItem( 'best', curr - 1 );
	}
	best.innerHTML = ( localStorage.getItem( 'best' ) ).toString();
	$sC.fadeIn( 1000 );
	setTimeout( function() {
		game = false;
	}, 1000 );
}
$( document ).ready( function() {
	$sC = $( '#startScreen' );
	$pizza = $( '#pizza' ),
	$rainbow = $( '#rainbow' ),
	$space = $( '#space' ),
	$stripes = $( '#stripes' );
	mobile = window.mobileAndTabletcheck();
	allDoge = [ $pizza, $rainbow, $space, $stripes ];
	/*$( document ).on( "touchmove", function( e ) {
		e.preventDefault();
	});*/
	document.ontouchmove = function( e ) { e.preventDefault() };
	if( mobile ) {
		$pizza.on( 'touchstart', function() {
			mouseClick( $pizza );
		});
		$rainbow.on( 'touchstart', function() {
			mouseClick( $rainbow );
		});
		$space.on( 'touchstart', function() {
			mouseClick( $space );
		});
		$stripes.on( 'touchstart', function() {
			mouseClick( $stripes );
		});
	} else {
		$pizza.on( 'mouseenter', function() {
			mouseHov( $pizza, 0.75 );
		});
		$rainbow.on( 'mouseenter', function() {
			mouseHov( $rainbow, 0.75 );
		});
		$space.on( 'mouseenter', function() {
			mouseHov( $space, 0.75 );
		});
		$stripes.on( 'mouseenter', function() {
			mouseHov( $stripes, 0.75 );
		});
		$pizza.on( 'mouseout', function() {
			mouseHov( $pizza, 1 );
		});
		$rainbow.on( 'mouseout', function() {
			mouseHov( $rainbow, 1 );
		});
		$space.on( 'mouseout', function() {
			mouseHov( $space, 1 );
		});
		$stripes.on( 'mouseout', function() {
			mouseHov( $stripes, 1 );
		});
		$pizza.on( 'mousedown', function() {
			mouseClick( $pizza );
		});
		$rainbow.on( 'mousedown', function() {
			mouseClick( $rainbow );
		});
		$space.on( 'mousedown', function() {
			mouseClick( $space );
		});
		$stripes.on( 'mousedown', function() {
			mouseClick( $stripes );
		});
	}
});