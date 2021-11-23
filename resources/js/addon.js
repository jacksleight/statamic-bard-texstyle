import Heading from './nodes/heading'
import Paragraph from './nodes/paragraph'
import Span from './marks/span'

const types = {
    heading: {
        command: 'bts_heading',
        character: 'H',
    },
    paragraph: {
        command: 'bts_paragraph',
        character: 'P',
    },
    span: {
        command: 'bts_span',
        character: 'T',
    },
};

Statamic.booting(() => {

    const styles = Statamic.$config.get('statamic-bard-textstyle.styles') || [];

    const css = {
        heading: {},
        paragraph: {},
        span: {},
    };
    styles.forEach(style => {
        css[style.type][style.class] = style.cp_css;
    });

    Statamic.$bard.extend(() => new Heading({ css: css.heading }));
    Statamic.$bard.extend(() => new Paragraph({ css: css.paragraph }));
    Statamic.$bard.extend(() => new Span({ css: css.span }));

    Statamic.$bard.buttons(buttons => {

        const index = _.findLastIndex(buttons, { command: 'heading' });

        buttons.splice(index + 1, 0, ...styles.map(style => {
            const type = types[style.type];
            return {
                name: style.button,
                text: style.name,
                command: type.command,
                args: style.type === 'heading'
                    ? { level: style.level, class: style.class }
                    : { class: style.class },
                html: `<span><span style="font-size: 21px; font-family: Times, serif;">${type.character}</span><sup>${style.ident}</sup></span>`,
                condition: config => config.buttons.includes(style.button),
            };
        }));

    });

});
