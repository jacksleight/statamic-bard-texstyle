import Paragraph from './paragraph'

Statamic.booting(() => {

    const styles = Statamic.$config.get('bard-paragraph-style.styles');

    Statamic.$bard.extend(({ node }) => node(new Paragraph));

    Statamic.$bard.buttons(buttons => {
        const index = _.findLastIndex(buttons, { command: 'heading' });
        buttons.splice(index + 1, 0, ...styles.map(style => ({
            text: style.buttonText,
            command: 'paragraph',
            args: { class: style.class },
            html: `<span><span style="font-size: 21px; font-family: Times, serif;">P</span><sup>${style.buttonIdent}</sup></span>`,
        })));
    });

    const css = styles.map(style => `.bard-fieldtype .ProseMirror p.${style.class} { ${style.css} }`).join(' ');
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

});
