export type Industry = {
	slug: string;
	shortTitle: string;
	title: string;
	description: string;
	intro: string;
	challenges: string[];
	solutions: string[];
	accent: string;
	icon: 'food' | 'production' | 'warehouse';
};

export const industries: Industry[] = [
	{
		slug: 'spozywcza',
		shortTitle: 'Branża spożywcza',
		title: 'Energia pod kontrolą w branży spożywczej',
		description: 'Ogrzewanie, chłodzenie i odzysk energii dla zakładów, w których ciągłość procesu ma znaczenie.',
		intro: 'Pomagamy zakładom spożywczym ograniczać straty ciepła i lepiej wykorzystywać energię już obecną w procesie produkcyjnym.',
		challenges: ['Wysokie koszty chłodzenia i ogrzewania', 'Duże ilości ciepła odpadowego', 'Praca instalacji przez całą dobę'],
		solutions: ['Odzysk ciepła z procesów technologicznych', 'Modernizacja źródeł ciepła i chłodu', 'Bilans energetyczny zakładu'],
		accent: '#4CC3B3',
		icon: 'food',
	},
	{
		slug: 'produkcyjna',
		shortTitle: 'Branża produkcyjna',
		title: 'Sprawniejsza energia dla produkcji',
		description: 'Rozwiązania energetyczne, które wspierają wydajność, bezpieczeństwo i przewidywalność kosztów.',
		intro: 'Analizujemy cały układ energetyczny — od źródła, przez proces, aż po miejsce, w którym energia jest tracona.',
		challenges: ['Rosnące ceny energii i gazu', 'Straty na przesyle i wentylacji', 'Przestoje oraz nierównomierne obciążenia'],
		solutions: ['Odzysk ciepła z pieców i sprężarek', 'Optymalizacja instalacji grzewczych', 'Monitoring zużycia i rekomendacje inwestycyjne'],
		accent: '#269F99',
		icon: 'production',
	},
	{
		slug: 'hale-i-magazyny',
		shortTitle: 'Hale i magazyny',
		title: 'Komfort i oszczędność w halach i magazynach',
		description: 'Efektywne ogrzewanie dużych kubatur bez przegrzewania, strat i niepotrzebnych kosztów.',
		intro: 'Dobieramy rozwiązania do wysokości hali, stref pracy, bram oraz realnego rytmu użytkowania obiektu.',
		challenges: ['Duża kubatura i nierówna temperatura', 'Częste otwieranie bram i doków', 'Trudność w utrzymaniu komfortu pracy'],
		solutions: ['Strefowe ogrzewanie i sterowanie', 'Odzysk ciepła z wentylacji', 'Modernizacja źródeł i automatyki'],
		accent: '#7AD8C9',
		icon: 'warehouse',
	},
];

export const caseStudies = [
	{ title: 'Odzysk ciepła z pieca', subtitle: 'Średnia firma produkcyjna z branży metalowej', power: '600 kW', payback: '3 lata', type: 'production' },
	{ title: 'Ciepło z procesu chłodniczego', subtitle: 'Zakład przetwórstwa spożywczego', power: '420 kW', payback: '2,5 roku', type: 'food' },
	{ title: 'Strefowe ogrzewanie hali', subtitle: 'Centrum logistyczne na Dolnym Śląsku', power: '280 kW', payback: '4 lata', type: 'warehouse' },
];

export const navItems = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'Branże', href: '/branze/' },
	{ label: 'Kontakt', href: '/kontakt/' },
];
