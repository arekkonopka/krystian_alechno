export function withBase(path: string) {
	const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
	const cleanPath = path.replace(/^\/+/, '');
	const basePath = base.replace(/^\/+|\/+$/g, '');
	const relativePath = cleanPath === basePath ? '' : cleanPath.startsWith(`${basePath}/`) ? cleanPath.slice(basePath.length + 1) : cleanPath;
	return `${base}${relativePath}`;
}
