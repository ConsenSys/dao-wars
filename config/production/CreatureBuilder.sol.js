"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var CreatureBuilder = (function (_Pudding) {
    _inherits(CreatureBuilder, _Pudding);

    function CreatureBuilder() {
      _classCallCheck(this, CreatureBuilder);

      _get(Object.getPrototypeOf(CreatureBuilder.prototype), "constructor", this).apply(this, arguments);
    }

    return CreatureBuilder;
  })(Pudding);

  ;

  // Set up specific data for this class.
  CreatureBuilder.abi = [{ "constant": false, "inputs": [], "name": "build_creature", "outputs": [{ "name": "result", "type": "address" }], "type": "function" }];
  CreatureBuilder.binary = "6060604052610f92806100126000396000f3606060405260e060020a6000350463a2bcee8b8114601a575b005b608960006060610eed806100a5833901809050604051809103906000f09050805080600160a060020a031663e9333fab336040518260e060020a0281526004018082600160a060020a031681526020019150506000604051808303816000876161da5a03f11560025750505090565b60408051600160a060020a039092168252519081900360200190f3606060405260008054600160a060020a0319163317905564174876e800600b55610ec08061002d6000396000f3606060405236156101695760e060020a6000350463056f07a1811461016b57806314fefca1146101745780631999eca81461019857806330a95e67146102e557806336cf7c871461032457806345c5b8ac146103305780634641257d146103645780634de2578c146104145780634f002522146108be578063516f279e146108f257806353b2c45d146108fb5780635c36b186146109045780636901f668146109d75780636ca3b5f6146109e457806370e87aaf14610a0c5780637593473c14610bde57806378cffc0914610c125780637cd3229a14610c3657806382b022e014610c485780638c7c9e0c14610c6c578063965fd7b614610c755780639dd807b114610c87578063a1580f1a14610c90578063aeec619714610da1578063c3fe3e2814610dd5578063d177148d14610de7578063d8124c5f14610dfb578063e9333fab14610e04578063f851a44014610e38578063f956d3af14610e4a578063fdac3a2014610e5c575b005b6109da600b5481565b610169600435600054600160a060020a03908116903316811415610a085750600255565b610169600435600654600090819060ff60a060020a9091041680156101cc5750600554600160a060020a0390811633909116145b156102e0576006805460a060020a60ff021916905560075460095460e260020a6339bceb8f02606090815260649190915260ff8516608452600160a060020a03919091169063e6f3ae3c9060a49060209060448187876161da5a03f11561000257505060075460408051805160e160020a6347c4986d028252600482018190529151919550600160a060020a03929092169250638f8930da91602481810192602092909190829003018187876161da5a03f1156100025750506040805180517fa1580f1a00000000000000000000000000000000000000000000000000000000825291519193600160a060020a038516935063a1580f1a92600483810193829003018183876161da5a03f115610002575050505b505050565b610169600435600554600160a060020a03908116903316811415610a0857600154821015610a085780600083606082818181858883f150505050505050565b6109da60035460ff1681565b610169600435600054600160a060020a03908116903316811415610a085760088054600160a060020a031916831790555050565b61016960065460ff60a060020a9091041680156103905750600554600160a060020a0390811633909116145b15610412576006805460a060020a60ff02191690556007546009547fddc63262000000000000000000000000000000000000000000000000000000006060908152606491909152600160a060020a03919091169063ddc63262906084906020906024816000876161da5a03f11561000257505060405151600180549091019055505b565b610169600435602435604435600654600090819060ff60a060020a90910416801561044e5750600554600160a060020a0390811633909116145b156108b7576006805460a060020a60ff021916905560075460095460e260020a6339bceb8f02606090815260649190915260ff8716608452600160a060020a03919091169063e6f3ae3c9060a49060209060448187876161da5a03f11561000257505060075460408051805160e160020a6347c4986d028252600482018190529151919550600160a060020a03929092169250638f8930da91602481810192602092909190829003018187876161da5a03f11561000257505060405151600160a060020a031682149050801561052657506001548311155b156108b757600660009054906101000a9004600160a060020a0316600160a060020a031663a2bcee8b6040518160e060020a0281526004018090506020604051808303816000876161da5a03f1156100025750505060405180519060200150905080600160a060020a03166378cffc09836040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080517f14fefca10000000000000000000000000000000000000000000000000000000081526003600482015290516314fefca191602481810192600092909190829003018183876161da5a03f11561000257505060408051600480547f82b022e00000000000000000000000000000000000000000000000000000000083529082015290516382b022e091602481810192600092909190829003018183876161da5a03f115610002575050604080516007547faeec6197000000000000000000000000000000000000000000000000000000008252600160a060020a03166004820152905163aeec619791602481810192600092909190829003018183876161da5a03f115610002575050604080516008547f45c5b8ac000000000000000000000000000000000000000000000000000000008252600160a060020a0316600482015290516345c5b8ac91602481810192600092909190829003018183876161da5a03f1156100025750505080600160a060020a031663fdac3a20846040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f115610002575050604080516006547f4f002522000000000000000000000000000000000000000000000000000000008252600160a060020a031660048201529051634f00252291602481810192600092909190829003018183876161da5a03f11561000257505060408051600080547fe9333fab000000000000000000000000000000000000000000000000000000008352600160a060020a03166004830152915163e9333fab92602483810193919291829003018183876161da5a03f115610002575050604051600090859082818181858883f1935050505050600760009054906101000a9004600160a060020a0316600160a060020a03166361f2de5083836040518360e060020a0281526004018083815260200182600160a060020a03168152602001925050506000604051808303816000876161da5a03f115610002575050505b5050505050565b610169600435600054600160a060020a03908116903316811415610a085760068054600160a060020a031916831790555050565b6109da60095481565b6109da600a5481565b610169600060006000600043600a600050541080156109255750600b543a11155b15610eba576006805460a060020a60ff02191660a060020a179055600154600a3a600b020490046107cf190193505a6005547f5c36b186000000000000000000000000000000000000000000000000000000006060908152919450600160a060020a031690635c36b18690606490849060048183876161da5a03f115610002575050505a83036107d0019150600a3a600b020482029050806001600050541115610e9357600180548290039055610e99565b602a5b6060908152602090f35b610169600435600554600160a060020a03908116903316811415610a0857600b8290555b5050565b61016960043560065460009060ff60a060020a909104168015610a3e5750600554600160a060020a0390811633909116145b15610a08576006805460a060020a60ff021916905560075460095460e260020a6339bceb8f02606090815260649190915260ff8416608452600160a060020a03919091169063e6f3ae3c9060a49060209060448187876161da5a03f11561000257505060075460408051805160e160020a6347c4986d0282526004820181905291519194600160a060020a03939093169350638f8930da92602482810193602093909290839003909101908290876161da5a03f11561000257505060405151600160a060020a0316600014159050610a0857604080516007546009547fb5a27a2100000000000000000000000000000000000000000000000000000000835260048301529151600160a060020a03929092169163b5a27a2191602481810192600092909190829003018183876161da5a03f11561000257505050600760009054906101000a9004600160a060020a0316600160a060020a03166317a650cc826040518260e060020a028152600401808281526020019150506000604051808303816000876161da5a03f11561000257505050806009600050819055505050565b610169600435600054600160a060020a03908116903316811415610a085760058054600160a060020a031916831790555050565b610169600435600054600160a060020a03908116903316811415610a085750600955565b610e80600754600160a060020a031681565b610169600435600054600160a060020a03908116903316811415610a085750600455565b6109da60015481565b610e80600654600160a060020a031681565b6109da60045481565b6008547f7d9383c300000000000000000000000000000000000000000000000000000000606090815233600160a060020a03908116606452610169921690637d9383c3906084906020906024816000876161da5a03f115610002575050604051516001141590506104125760028054600019019081905560001415610412576001600360006101000a81548160ff02191690830217905550600760009054906101000a9004600160a060020a0316600160a060020a031663f0a45cff6009600050546001600050546040518360e060020a02815260040180838152602001828152602001925050506000604051808303816000876161da5a03f115610002575050600754600160a060020a03169050ff5b610169600435600054600160a060020a03908116903316811415610a085760078054600160a060020a031916831790555050565b610e80600854600160a060020a031681565b6109da60065460ff60a060020a9091041681565b6109da60025481565b610169600435600054600160a060020a03908116903316811415610a085760008054600160a060020a031916831790555050565b610e80600054600160a060020a031681565b610e80600554600160a060020a031681565b610169600435600054600160a060020a03908116903316811415610a085750600155565b600160a060020a03166060908152602090f35b60006001555b60405133600160a060020a031690600090839082818181858883f150505050505b5050505056";

  if ("0xe5ad84db49ba3be0f82b2101cb14137d843b0ab2" != "") {
    CreatureBuilder.address = "0xe5ad84db49ba3be0f82b2101cb14137d843b0ab2";

    // Backward compatibility; Deprecated.
    CreatureBuilder.deployed_address = "0xe5ad84db49ba3be0f82b2101cb14137d843b0ab2";
  }

  CreatureBuilder.generated_with = "1.0.2";
  CreatureBuilder.contract_name = "CreatureBuilder";

  return CreatureBuilder;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.CreatureBuilder = factory;
}