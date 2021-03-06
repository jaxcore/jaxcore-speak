import {SamProcess, TextToPhonemes} from '../../node_modules/sam-js';
function SamData(text, options) {
	const input = TextToPhonemes(text);
	options = options || {};
	
	const data = SamProcess(input, options);
	const audiodata = new Float32Array(data.length);
	for(let i=0; i < data.length; i++) {
		audiodata[i] = (data[i] - 128) / 256;
	}
	
	return audiodata;
}
self.SamData = SamData;