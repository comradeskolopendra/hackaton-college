import cn from 'classnames';

// interface Props {
// 	tag?: 'div' | 'section' | 'article';
// 	className?: string;
// 	size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm';
// 	style?: CSSProperties;
// }

const Container = ({ children, className, style, tag = 'div', size = 'xl' }) => {
	if (tag === 'section') {
		return (
			<section
				className={cn(` max-xl:px-3 mx-auto`, className, {
					'max-w-screen-2xl': size === '2xl',
					'max-w-screen-xl': size === 'xl',
					'max-w-screen-lg': size === 'lg',
					'max-w-screen-md': size === 'md',
					'max-w-screen-sm': size === 'sm',
				})}
				style={style}>
				{children}
			</section>
		);
	} else if (tag === 'article') {
		return (
			<article
				className={cn(` max-xl:px-3 mx-auto`, className, {
					'max-w-screen-2xl': size === '2xl',
					'max-w-screen-xl': size === 'xl',
					'max-w-screen-lg': size === 'lg',
					'max-w-screen-md': size === 'md',
					'max-w-screen-sm': size === 'sm',
				})}
				style={style}>
				{children}
			</article>
		);
	} else {
		return (
			<div
				className={cn(` max-xl:px-3 mx-auto`, className, {
					'max-w-screen-2xl': size === '2xl',
					'max-w-screen-xl': size === 'xl',
					'max-w-screen-lg': size === 'lg',
					'max-w-screen-md': size === 'md',
					'max-w-screen-sm': size === 'sm',
				})}
				style={style}>
				{children}
			</div>
		);
	}
};

export default Container;
