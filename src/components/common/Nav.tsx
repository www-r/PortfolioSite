import { ComponentProps } from 'react';
import Link from 'next/link';
import { PATH_NAME } from '@/constants';

interface Props extends ComponentProps<'nav'> {
	list?: string[];
}

export default function Nav({ ...props }: Props) {
	const linksArr = [PATH_NAME.home, PATH_NAME.about, PATH_NAME.projects, PATH_NAME.guestbook];

	return (
		<nav {...props}>
			<ul className="flex-row--evenly">
				{linksArr.map((link) => {
					const pathname = link === PATH_NAME.home ? '' : link;
					return (
						<Link href={`/${pathname}`} key={link}>
							<li className="p-4 sm:text-vw-sm 2xl:text-xl font-header hover:text-[orange]">{link}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}