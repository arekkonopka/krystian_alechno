export type Industry = {
	slug: string;
	shortTitle: string;
	title: string;
	description: string;
	intro: string;
	challenges: string[];
	solutions: string[];
	accent: string;
	icon: 'food' | 'production' | 'warehouse' | 'other';
};

export const industries: Industry[] = [
	{
		slug: 'produkcyjna',
		shortTitle: 'Branża produkcyjna',
		title: 'Odzyskaj energię z produkcji',
		description: 'Energia, ciepło odpadowe, procesy technologiczne.',
		intro: 'W procesach produkcyjnych największy potencjał oszczędności energii tkwi w cieple odpadowym i usuwanym do otoczenia.',
		challenges: ['Rosnące ceny energii i gazu', 'Straty na przesyle i wentylacji', 'Przestoje oraz nierównomierne obciążenia'],
		solutions: ['Odzysk ciepła z pieców i sprężarek', 'Optymalizacja instalacji grzewczych', 'Monitoring zużycia i rekomendacje inwestycyjne'],
		accent: '#269F99',
		icon: 'production',
	},
	{
		slug: 'spozywcza',
		shortTitle: 'Branża spożywcza',
		title: 'Energia pod kontrolą w branży spożywczej',
		description: 'Chłodzenie, ciepło, para, woda i procesy produkcyjne.',
		intro: 'Pomagamy zakładom spożywczym ograniczać straty ciepła i lepiej wykorzystywać energię już obecną w procesie produkcyjnym.',
		challenges: ['Wysokie koszty chłodzenia i ogrzewania', 'Duże ilości ciepła odpadowego', 'Praca instalacji przez całą dobę'],
		solutions: ['Odzysk ciepła z procesów technologicznych', 'Modernizacja źródeł ciepła i chłodu', 'Bilans energetyczny zakładu'],
		accent: '#4CC3B3',
		icon: 'food',
	},
	{
		slug: 'inne-branze-przemyslowe',
		shortTitle: 'Inne branże przemysłowe',
		title: 'Dopasowana energia dla specyficznych procesów',
		description: 'Dopasowane rozwiązania dla specyficznych procesów.',
		intro: 'Każdy proces przemysłowy może mieć własne źródła strat i niewykorzystanego potencjału. Zaczynamy od poznania jego specyfiki.',
		challenges: ['Nietypowe profile zużycia energii', 'Brak porównywalnych punktów odniesienia', 'Rozwiązania wymagające dopasowania do procesu'],
		solutions: ['Analiza procesu i bilans energetyczny', 'Indywidualny dobór technologii', 'Plan wdrożenia dopasowany do zakładu'],
		accent: '#4CC3B3',
		icon: 'other',
	},
];

export const caseStudies = [
	{ title: 'Odzysk ciepła z pieca', subtitle: 'Średnia firma produkcyjna z branży metalowej', power: '600 kW', payback: '3 lata', type: 'production' },
	{ title: 'Ciepło z procesu chłodniczego', subtitle: 'Zakład przetwórstwa spożywczego', power: '420 kW', payback: '2,5 roku', type: 'food' },
	{ title: 'Odzysk ciepła z chłodzenia', subtitle: 'Centrum danych na Dolnym Śląsku', power: '310 kW', payback: '3,5 roku', type: 'other' },
];

export const navItems = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'Branże', href: '/branze/' },
	{ label: 'Kontakt', href: '/kontakt/' },
];
