
function App() {

	const createDigits = () => {
		const digit = [];

		for (let i = 1; i < 10 ; i++){
				digit.push(
					<button key = {i}> {i} </button>
				)
		}
		return digit;
	}

	return (
		<div className="App">
			<div className ="calculator"> 
				<div className = "display">
					<span> (0)</span> 0
				</div>

				<div className = "operator">
					<button>/</button>
					<button>*</button> 
					<button>+</button> 
					<button>-</button>

					<button>DEL</button>
				</div>

				<div className = "digits">
					{ createDigits() }
					<button>0</button>
					<button>.</button> 
					<button>=</button> 
					
				</div>
				
			</div>
		</div>
	);
}

export default App;