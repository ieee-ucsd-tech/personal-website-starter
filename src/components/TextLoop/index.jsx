import React, { useEffect, useRef, useState } from 'react';
import Typedjs from 'typed.js';
import _uniqueId from 'lodash/uniqueId';

import './index.scss';

const TextLoop = ({strings, cursorChar = '|', typeSpeed = 30, backSpeed = 30, beginDelay = 1000, backDelay = 2000, smartBackspace = false}) => {
  const typedRef = useRef();
  const [id] = useState(_uniqueId('typed-'));

	strings = ['', ...strings.map(s => `^${beginDelay}${s}`)];
	const options = {
    strings: strings,
    cursorChar: cursorChar,
		typeSpeed: typeSpeed,
    backSpeed: backSpeed,
		backDelay: backDelay,
		smartBackspace: smartBackspace,
		loop: true,
	};

	useEffect(() => {
		const typed = new Typedjs(`#${id}`, options);
		return () => typed.destroy();
	});

	return (
		<span className="Typed">
			<span id={id}>
				<span ref={(ref) => typedRef.current = ref} />
			</span> 
		</span>
	);
}

export default TextLoop;