import React, { useEffect, useRef, useState } from 'react';

function useDidUpdateEffect(fn, inputs) {
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) fn();
		else didMountRef.current = true;
	}, inputs);
}

const defaultSeparators = ['Enter', 'Tab'];

function Tag({ text, remove, disabled, className }) {
	const handleOnRemove = (e) => {
		e.stopPropagation();
		remove(text);
	};

	return (
		<span className='inline-flex items-center rounded bg-blue-600 px-2 py-2'>
			<span>{text}</span>
			{!disabled && (
				<button
					type='button'
					onClick={handleOnRemove}
					aria-label={`remove ${text}`}
					className=' ml-2 cursor-pointer rounded-full border-0 bg-transparent p-0 hover:text-neutral-400 hover:transition-colors'
				>
					&#10005;
				</button>
			)}
		</span>
	);
}

const TagsInput = ({
	name,
	placeHolder,
	value,
	onChange,
	onBlur,
	separators,
	disableBackspaceRemove,
	onExisting,
	onRemoved,
	disabled,
	isEditOnRemove,
	beforeAddValidate,
	onKeyUp,
	classNames,
	maxTagsCount,
}) => {
	const [tags, setTags] = useState(value || []);

	useDidUpdateEffect(() => {
		onChange && onChange(tags);
	}, [tags]);

	useDidUpdateEffect(() => {
		if (JSON.stringify(value) !== JSON.stringify(tags)) {
			setTags(value);
		}
	}, [value]);

	const placeholderText =
		maxTagsCount !== undefined && tags.length >= maxTagsCount
			? ''
			: placeHolder;

	const handleOnKeyDown = (e) => {
		e.stopPropagation();

		if (
			!e.target.value &&
			!disableBackspaceRemove &&
			tags.length &&
			e.key === 'Backspace'
		) {
			e.target.value = isEditOnRemove ? `${tags.at(-1)} ` : '';
			setTags([...tags.slice(0, -1)]);
			return; // Allow backspace operation and exit function
		}

		// Check to see if the maximum count of tags has been reached, excluding backspace, and prevent any key input
		if (maxTagsCount !== undefined && tags.length >= maxTagsCount) {
			e.preventDefault();
			return;
		}

		const text = e.target.value;

		if (text && (separators || defaultSeparators).includes(e.key)) {
			e.preventDefault();
			if (beforeAddValidate && !beforeAddValidate(text, tags)) return;

			if (tags.includes(text)) {
				onExisting && onExisting(text);
				return;
			}

			setTags([...tags, text]);
			e.target.value = '';
		}
	};

	const onTagRemove = (text) => {
		setTags(tags.filter((tag) => tag !== text));
		onRemoved && onRemoved(text);
	};

	return (
		<div
			aria-labelledby={name}
			className='flex flex-wrap w-4/5 md:w-1/2 items-center gap-2 rounded-md border border-neutral-800 bg-[#1e1e1e] p-2 px-3 py-2 text-sm 
			ring-offset-neutral-950 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'
		>
			{tags.map((tag) => (
				<Tag
					key={tag}
					className={classNames?.tag}
					text={tag}
					remove={onTagRemove}
					disabled={disabled}
				/>
			))}

			<input
				className='h-10 md:w-100 w-200 flex-grow bg-transparent
				 text-neutral-50 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring  focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'
				type='text'
				name={name}
				placeholder={placeholderText}
				onKeyDown={handleOnKeyDown}
				onBlur={onBlur}
				disabled={disabled}
				onKeyUp={onKeyUp}
			/>
		</div>
	);
};

export { TagsInput };