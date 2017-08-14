module.exports = {
	isNull: function(val) {
		if(val === null||val === undefined||val === ""||val === NaN) {
			return false;
		}
		return true;
	}
}