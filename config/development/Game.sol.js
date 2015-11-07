"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Game = (function (_Pudding) {
    _inherits(Game, _Pudding);

    function Game() {
      _classCallCheck(this, Game);

      _get(Object.getPrototypeOf(Game.prototype), "constructor", this).apply(this, arguments);
    }

    return Game;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Game.abi = [{ "constant": true, "inputs": [], "name": "num_species", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }, { "name": "y", "type": "uint256" }, { "name": "_gas_deposits", "type": "uint8" }, { "name": "_gas_amount", "type": "uint256" }, { "name": "_starting_gas", "type": "uint256" }, { "name": "_creature_builder", "type": "address" }], "name": "initialize", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "starting_gas", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "board", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "valid_creature", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_creature", "type": "address" }], "name": "register_creature", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "creature_builder", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_deposits", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [], "name": "_random_empty_location", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "brain", "type": "address" }], "name": "add_creature", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "gas_amount", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Game.binary = "606060405260028054600160a060020a0319163317905561158c806100246000396000f3606060405236156100985760e060020a60003504634bee472b811461009a5780634e15c376146100a35780636f9c494b146101ca5780637cd3229a146101d35780637d9383c3146101e557806386acb16d14610200578063965fd7b614610287578063a49c326e14610299578063c062ef86146102ac578063de72a6f31461041b578063f851a440146104bd578063fb794281146104cf575b005b6104d860055481565b61009860043560243560443560643560843560a435600254600160a060020a039081169033168114156101c1576001805473ffffffffffffffffffffffffffffffffffffffff191683179055604051610cd5806108b783398101819003906000f0600080546040805173ffffffffffffffffffffffffffffffffffffffff19909216939093178083557f3cb260b2000000000000000000000000000000000000000000000000000000008252600482018b9052602482018a90529251600160a060020a039390931692633cb260b292604483810193919291829003018183876161da5a03f1156100025750506002805474ff0000000000000000000000000000000000000000191660a060020a880217905550600384905560048390555b50505050505050565b6104d860045481565b6104ea600054600160a060020a031681565b6104d860043560066020526000908152604090205460ff1681565b61009860043530600160a060020a031633600160a060020a031614806102355750600254600160a060020a0390811633909116145b8061025b575033600160a060020a031660009081526006602052604090205460ff166001145b1561028457600160a060020a0381166000908152600660205260409020805460ff191660011790555b50565b6104ea600154600160a060020a031681565b61050760025460a060020a900460ff1681565b6104d85b60008054604080517f0539c6d60000000000000000000000000000000000000000000000000000000081529051436000190140928492839283928392600160a060020a039190911691630539c6d691600481810192602092909190829003018187876161da5a03f1156100025750506040515194505083850692505b83821015610413578183019050600060009054906101000a9004600160a060020a0316600160a060020a031663f6a5414d826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f115610002575050604051516000149050801561040a5750600060009054906101000a9004600160a060020a0316600160a060020a0316638f8930da826040518260e060020a028152600401808281526020019150506020604051808303816000876161da5a03f11561000257505060405151600160a060020a031660001490505b156108ab578095505b505050505090565b61009860043560035460025460045460a060020a90910460ff1690910201600080348390106108a5576005805460019081019091556040805191547fa2bcee8b0000000000000000000000000000000000000000000000000000000083529051600160a060020a03919091169163a2bcee8b916004828101926020929190829003018187876161da5a03f11561000257505060405151925061051e90506102b0565b6104ea600254600160a060020a031681565b6104d860035481565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b6040805160ff929092168252519081900360200190f35b60408051600080547fba50f96500000000000000000000000000000000000000000000000000000000835260048301859052600160a060020a03878116602485015293519495509092169263ba50f96592604480840193919291829003018183876161da5a03f1156100025750505030600160a060020a03166386acb16d836040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f1156100025750505081600160a060020a03166378cffc09826040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f1156100025750505081600160a060020a03166314fefca160036040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f11561000257505060408051600080547faeec6197000000000000000000000000000000000000000000000000000000008352600160a060020a0390811660048401529251928616935063aeec619792602483810193829003018183876161da5a03f1156100025750505081600160a060020a03166382b022e06005600050546040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080516001547f4f002522000000000000000000000000000000000000000000000000000000008252600160a060020a03908116600483015291519185169250634f002522916024828101926000929190829003018183876161da5a03f1156100025750505081600160a060020a03166345c5b8ac306040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f115610002575050604080516002547fe9333fab000000000000000000000000000000000000000000000000000000008252600160a060020a0390811660048301529151918516925063e9333fab916024828101926000929190829003018183876161da5a03f11561000257505060405160008054600160a060020a0316925090349082818181858883f1506002546003547f1d18b85700000000000000000000000000000000000000000000000000000000835260a060020a90910460ff1660048301526024820152604051631d18b85793604483810194509092829003018183876161da5a03f115610002575050505b50505050565b6001919091019061032c5660606040526007805433600160a060020a031990911681179091556006805461010060a860020a031916610100909202919091179055610c92806100436000396000f3606060405236156101275760e060020a60003504630539c6d6811461012957806317a650cc146101335780631d18b857146101e057806324eb95fe1461026e5780633cb260b21461028657806345c5b8ac146102fb5780634edccd311461034457806352d4bb02146104205780635d7bb3571461042957806361f2de501461049157806366ab88ee1461055d578063680f0eda14610569578063705bd6f61461058d5780638f8930da146105b8578063b070bdc6146105ec578063b5a27a2114610685578063ba50f9651461072d578063c3fe3e2814610770578063ddc6326214610787578063e6f3ae3c1461087d578063e9333fab146108af578063eecc3be8146108e5578063f0a45cff14610955578063f6a5414d146109fd578063f851a44014610a49575b005b610a5b6002545b90565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108e2573360026000508281548110156100025750600052600080516020610c528339815191529091018054600160a060020a0319169091179055565b610127600435602435600754600090819081908190600160a060020a03908116903316811415610ad45743600019014094505b8660ff168460ff161015610ad4576001805461010087049660ff908190069550858202049350879190849081101561000257506000819052600080516020610c72833981519152840180549092019091559390930192610213565b610a5b60043560038160028110156100025750015481565b610127600435602435600754600160a060020a03908116903316811415610ad9576003839055600482905560018054838502808355919082908015829011610ade576000839052610ade90600080516020610c728339815191529081019083015b80821115610b1b57600081556001016102e7565b610127600435600754600160a060020a039081169033168114156108e05760068054610100840274ffffffffffffffffffffffffffffffffffffffff0019919091161790555050565b610127600435602435604435606435600754600160a060020a03908116903316811415610419578360006000508681548110156100025790805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630191066101000a81548160ff02191690830217905550826001600050868154811015610002576000918252600080516020610c7283398151915201905055600280548391908790811015610002575060005250600080516020610c5283398151915285018054600160a060020a031916831790555b5050505050565b610a5b60055481565b610a6d60408051602081810183526000825282516001805480840283018401909552848252929390929183018282801561048557602002820191906000526020600020905b81600050548152602001906001019080831161046e575b50505050509050610130565b610127600435602435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f1156100025750506040515160011490508061051d5750600754600160a060020a0390811633909116145b156108e05780600260005083815481101561000257600091909152600080516020610c52833981519152018054600160a060020a03191690911790555050565b610a5b60065460ff1681565b610127600435600754600160a060020a039081169033168114156108e05750600555565b610a5b6004356001805482908110156100025750600052600080516020610c72833981519152015481565b610ab76004356002805482908110156100025750600052600080516020610c528339815191520154600160a060020a031681565b604080516020818101835260008083528351815480840282018401909552848152610a6d949092830182828015610485579080526020028101907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639084905b825461010083900a900460ff1681526020600192830181810494850194909303909202910180841161064b57905050505050509050610130565b610127600435600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108e2576000600260005082815481101561000257509052600080516020610c52833981519152018054600160a060020a0319169055565b610127600435602435806002600050838154811015610002575060005250600080516020610c528339815191529091018054600160a060020a0319169091179055565b610ab76006546101009004600160a060020a031681565b610a5b6004356000600660019054906101000a9004600160a060020a0316600160a060020a0316637d9383c3336040518260e060020a0281526004018082600160a060020a031681526020019150506020604051808303816000876161da5a03f115610002575050604051516001141590506108785760055460018054849081101561000257508252600080516020610c728339815191528301541115610b60576001805460055491908490811015610002575050600080516020610c728339815191528301805491909103905560055460405133600160a060020a031691839182818181858883f1509093505050505b919050565b610a5b60043560243560008160ff16600014801561089f575060035483068114155b15610bf357506000198201610bed565b610127600435600754600160a060020a039081169033168114156108e05760078054600160a060020a031916831790555b505b50565b610a6d60408051602081810183526000825260028054845181840281018401909552808552929392909183018282801561048557602002820191906000526020600020905b8154600160a060020a031681526001919091019060200180831161092a575b50505050509050610130565b61012760043560243533600160a060020a031660026000508381548110156100025750600052600080516020610c52833981519152830154600160a060020a031614156108e0576000600260005083815481101561000257600080516020610c5283398151915281018054600160a060020a031916905560018054859450909250811015610002575060005250600080516020610c7283398151915290910180549091019055565b610a5b6004356000805482908110156100025750805260208082047f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563015491066101000a900460ff1681565b610ab7600754600160a060020a031681565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b505050505b505050565b50505050818302600260005081815481835581811511610b1f576000839052610b1f90600080516020610c528339815191529081019083016102e7565b5090565b50505050818302600060005081815481835581811511610ad457601f016020900481601f01602090048360005260206000209182019101610ad491906102e7565b6001805483908110156100025760008281528254600080516020610c72833981519152929092015493509190849081101561000257600080516020610c72833981519152018290555060405133600160a060020a03169190839082818181858883f1506108789350505050565b8160ff166002148015610be1575060035483115b15610c1e575060035482035b92915050565b8160ff166001148015610c0f5750600354600019810190840614155b15610bcd575060018201610bed565b8160ff166003148015610c3a5750600354600454026000190183105b15610c4a57506003548201610bed565b506000610bed56405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5aceb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6";

  if ("0x6be83af04acec17da9cb3052deaafa243196d954" != "") {
    Game.address = "0x6be83af04acec17da9cb3052deaafa243196d954";

    // Backward compatibility; Deprecated.
    Game.deployed_address = "0x6be83af04acec17da9cb3052deaafa243196d954";
  }

  Game.generated_with = "1.0.2";
  Game.contract_name = "Game";

  return Game;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Game = factory;
}