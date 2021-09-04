import PropTypes from 'prop-types'

const Section = ({ children }) => (
    <section>
        <div>
            {children}
        </div>
    </section>
);

Section.propTypes = {
    children:PropTypes.node,
}

export default Section;