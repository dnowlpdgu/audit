// Original audit prompts. Verify these against the licensed edition used as audit criteria.
export const basis = 'ISO 9001:2015 + Amd 1:2024 baseline; final ISO 9001:2026 coverage not verified';
// Each entry: reference, PDCA stage, topic, suggested evidence, individual audit tests.
const clauses = [
['4.1','Plan','Organizational context','Context review, strategic plan, local risk register',[
'Which internal and external issues affect this location and its ability to deliver consistent products and services?',
'How are changes in these issues monitored and reviewed, and how do they influence the QMS?',
'Has the organization determined whether climate change is a relevant issue and recorded or otherwise demonstrated that determination?']],
['4.2','Plan','Interested parties','Stakeholder register, legal register, contracts',[
'Which interested parties are relevant to this location and what QMS-related requirements do they have?',
'How are relevant parties and their requirements monitored and reviewed?',
'Have relevant interested-party requirements relating to climate change been considered where applicable?']],
['4.3','Plan','QMS scope','Scope statement, certificate, site process list',[
'Do documented QMS boundaries identify this location, its activities, products and services?',
'Does the scope consider organizational context, relevant interested parties and the products and services provided?',
'Are any requirements considered not applicable justified without impairing product or service conformity or customer satisfaction?']],
['4.4.1','Plan','QMS processes','Process maps, process measures, ownership matrix',[
'Are necessary QMS processes, their inputs, outputs, sequence and interactions established for the site?',
'Are process controls, performance criteria, monitoring methods and measures defined and used?',
'Are resources, responsibilities and authority assigned for each process?',
'Are risks and opportunities addressed, process results evaluated and changes or improvements implemented?']],
['4.4.2','Plan','Process documentation','Controlled procedures, completed operating records',[
'Is sufficient maintained documented information available to support consistent process operation?',
'Are retained records sufficient to demonstrate that site processes are carried out as planned?']],
['5.1.1','Plan','Leadership and accountability','Leadership interviews, business plans, review records',[
'How does top management demonstrate accountability for QMS effectiveness and integrate the QMS into business processes?',
'Are the quality policy and objectives aligned with strategic direction and organizational context?',
'Does leadership promote the process approach and risk-based thinking and make necessary resources available?',
'Does leadership communicate the importance of conformity, engage people, support process owners and promote improvement to achieve intended QMS results?']],
['5.1.2','Plan','Customer focus','Contract reviews, satisfaction results, compliance checks',[
'How does management ensure customer and applicable statutory and regulatory requirements are determined, understood and consistently met?',
'Are risks and opportunities affecting conformity and customer satisfaction determined and addressed?',
'How is the focus on enhancing customer satisfaction maintained at this site?']],
['5.2.1','Plan','Quality policy content','Approved policy, business strategy',[
'Is the quality policy appropriate to organizational purpose and context and supportive of strategic direction?',
'Does it provide a framework for quality objectives and commitments to applicable requirements and continual QMS improvement?']],
['5.2.2','Plan','Quality policy communication','Policy access, induction records, staff interviews',[
'Is the policy maintained as controlled documented information and available to relevant interested parties as appropriate?',
'Can a representative sample of site personnel explain how the policy is communicated, understood and applied in their work?']],
['5.3','Plan','Roles and authorities','Organization chart, role profiles, escalation routes',[
'Are QMS responsibilities and authorities assigned, communicated and understood?',
'Who ensures QMS conformity, intended process outputs, performance reporting and improvement opportunities?',
'Who promotes customer focus and protects QMS integrity during planned or implemented change?']],
['6.1.1','Plan','Determine risks and opportunities','Risk register, context assessment, process planning',[
'Do planning activities use context and interested-party information to identify risks and opportunities?',
'Do identified risks and opportunities address intended QMS results, desirable effects, prevention of undesired effects and improvement?']],
['6.1.2','Plan','Risk response and effectiveness','Action plans, process controls, effectiveness checks',[
'Are proportionate actions planned for risks and opportunities based on potential effects on conformity?',
'Are these actions integrated into QMS processes and evaluated for effectiveness?']],
['6.2.1','Plan','Quality objectives','Objective register, site dashboards, policy',[
'Are relevant functions, levels and processes assigned measurable objectives consistent with the quality policy?',
'Do objectives consider applicable requirements, conformity and customer satisfaction?',
'Are objectives monitored, communicated, updated when needed and retained as documented information?']],
['6.2.2','Plan','Objective achievement plans','Plans, budgets, owner assignments, evaluation records',[
'Do plans identify what will be done, resources, responsibility, timescales and evaluation methods for each objective?',
'Can site personnel demonstrate progress and action when planned results are not achieved?']],
['6.3','Plan','Planned QMS changes','Change requests, impact assessments, approvals',[
'Are QMS changes performed in a planned manner with their purpose and potential consequences considered?',
'Do change plans protect QMS integrity and account for resource availability and responsibilities or authority changes?']],
['7.1.1','Do','Resources: general','Resource plans, budgets, capacity reviews',[
'How are resources needed to establish, implement, maintain and improve the QMS determined and provided?',
'Are internal resource capabilities and constraints considered alongside resources needed from external providers?']],
['7.1.2','Do','People','Staffing plans, shift coverage, workload reviews',[
'Is staffing sufficient for effective QMS implementation and operation and control of site processes?',
'How are absences, demand changes and key-person dependencies managed?']],
['7.1.3','Do','Infrastructure','Asset register, maintenance plans, IT availability',[
'Are buildings, utilities, equipment, transport and information or communication systems suitable for conformity?',
'How is infrastructure maintained and how are breakdown risks addressed?']],
['7.1.4','Do','Process environment','Workplace observations, environmental controls, staff interviews',[
'Are physical, social and psychological conditions needed for effective processes determined and maintained?',
'Where relevant, are cleanliness, temperature, lighting, hygiene, stress and discrimination risks managed?']],
['7.1.5.1','Do','Monitoring and measuring resources','Equipment register, suitability assessments, maintenance history',[
'Are monitoring and measuring resources suitable for the specific checks used to verify conformity?',
'Are they maintained for continued fitness and are records retained as evidence of that fitness?']],
['7.1.5.2','Do','Measurement traceability','Calibration certificates, equipment labels, out-of-tolerance reviews',[
'Where measurement traceability is required or essential, are instruments calibrated or verified at appropriate intervals against traceable standards?',
'Where no reference standard exists, is the calibration or verification basis retained?',
'Are instruments identified and safeguarded from adjustment, damage or deterioration?',
'When equipment is unfit, are previous measurement results assessed and appropriate action taken?']],
['7.1.6','Do','Organizational knowledge','Knowledge bases, handover records, lessons learned',[
'Is knowledge necessary for site process operation and conformity determined, maintained and accessible?',
'How are existing knowledge, changing needs and methods for acquiring additional knowledge considered?']],
['7.2','Do','Competence','Competence matrices, qualifications, observed work, effectiveness checks',[
'Are competence requirements established for people whose work affects QMS performance and effectiveness?',
'Is competence demonstrated through education, training or experience, with appropriate records retained?',
'Where competence actions are needed, are they implemented and evaluated for effectiveness?']],
['7.3','Do','Awareness','Interviews across shifts, induction and communication records',[
'Are people aware of the quality policy and objectives relevant to their work?',
'Can they describe their contribution to QMS effectiveness, the benefits of improved performance and implications of failing requirements?']],
['7.4','Do','Communication','Communication plans, meeting records, escalation examples',[
'Has the organization determined what, when, with whom and how to communicate on relevant QMS matters?',
'Are responsibility for communication and effective internal and external channels evident at the site?']],
['7.5.1','Do','Documented information: general','QMS document register, site record inventory',[
'Does the QMS include documented information required by the audit criteria?',
'Does it include additional documented information the organization considers necessary for QMS effectiveness, taking account of its size, complexity and competence?']],
['7.5.2','Do','Creation and update','Recent procedure revisions, templates, approvals',[
'When information is created or updated, are identification, description, format and media suitable?',
'Is documented information reviewed and approved for suitability and adequacy?']],
['7.5.3.1','Do','Availability and protection','Point-of-use checks, access controls, backup arrangements',[
'Is QMS documented information available and suitable where and when it is needed?',
'Is information protected against loss of confidentiality, improper use or loss of integrity?']],
['7.5.3.2','Do','Document lifecycle controls','Version history, archive rules, external documents, disposal records',[
'Are distribution, access, retrieval, use, storage, preservation and legibility controlled?',
'Are changes, retention periods and disposition controlled?',
'Are necessary external-origin documents identified and controlled, and retained conformity evidence protected from unintended alteration?']],
['8.1','Do','Operational planning and control','Process plans, acceptance criteria, retained records',[
'Are product or service requirements translated into process criteria, acceptance criteria and resource needs?',
'Are controls implemented and documented information retained to show processes ran as planned and outputs meet requirements?',
'Are planned changes controlled, unintended changes reviewed and adverse effects mitigated?',
'Are outsourced processes controlled within operational planning?']],
['8.2.1','Do','Customer communication','Enquiries, complaints, contracts, customer property records',[
'Do communication arrangements cover product or service information, enquiries, contracts, orders and their changes?',
'Are customer feedback and complaints captured and addressed?',
'Are communication arrangements for customer property and relevant contingency actions defined?']],
['8.2.2','Do','Determining requirements','Specifications, legal checks, offer approvals',[
'Are product or service requirements defined, including applicable statutory, regulatory and organizational requirements?',
'Can the organization substantiate the claims made for its products and services?']],
['8.2.3.1','Do','Review before commitment','Contract review samples, capacity checks, discrepancy resolution',[
'Before commitment, are customer requirements, delivery and post-delivery obligations reviewed against capability?',
'Are unstated but necessary intended-use requirements, organizational requirements and legal obligations considered?',
'Are differences from previous requirements resolved and undocumented customer requirements confirmed before acceptance?']],
['8.2.3.2','Do','Review records','Approved quotations, order review records, requirement updates',[
'Are records retained of requirement-review results where applicable?',
'Are records of any new product or service requirements retained?']],
['8.2.4','Do','Requirement changes','Order revisions, specification updates, notifications',[
'When requirements change, are affected documented information and operational instructions updated?',
'Are relevant personnel made aware of changed requirements?']],
['8.3.1','Do','Design and development: applicability','Design responsibilities, scope justification, design process',[
'Has the organization determined whether it has design and development responsibility for the products or services provided?',
'Where applicable, is a design and development process established, implemented and maintained to support subsequent provision?']],
['8.3.2','Do','Design planning','Design plans, milestones, responsibility and interface records',[
'Does planning address design nature, duration, complexity, stages, reviews, verification and validation?',
'Are design responsibilities, internal and external resources and interfaces controlled?',
'Are customer or user involvement, downstream provision needs, expected controls and required records considered?']],
['8.3.3','Do','Design inputs','Input specifications, previous designs, risk and compliance assessments',[
'Do inputs address functional and performance needs, experience from similar designs and applicable legal or regulatory requirements?',
'Are committed standards or codes and potential consequences of failure considered?',
'Are inputs adequate, complete and unambiguous, conflicting inputs resolved and input records retained?']],
['8.3.4','Do','Design controls','Review minutes, verification reports, validation results',[
'Are intended design results defined and reviews performed to evaluate ability to meet requirements?',
'Do verification activities confirm outputs meet inputs, and validation activities confirm suitability for intended use?',
'Are problems identified during reviews, verification or validation acted on and records retained?']],
['8.3.5','Do','Design outputs','Released drawings, service designs, inspection plans',[
'Do design outputs meet input requirements and support subsequent product or service provision?',
'Do outputs specify necessary monitoring, measurement, acceptance criteria and essential safe and proper-use characteristics?',
'Are design output records retained?']],
['8.3.6','Do','Design changes','Change histories, impact reviews, authorization records',[
'Are design changes identified, reviewed and controlled to avoid adverse effects on conformity?',
'Are change records, review results, authorization and necessary prevention actions retained?']],
['8.4.1','Do','External-provider controls','Supplier approvals, performance ratings, re-evaluations',[
'Are controls applied to externally provided processes, products and services, including outsourced processes and direct-to-customer provision?',
'Are evaluation, selection, performance monitoring and re-evaluation criteria based on provider ability to meet requirements?',
'Are records of these activities and necessary follow-up actions retained?']],
['8.4.2','Do','Type and extent of supplier controls','Risk-based supplier controls, receiving inspections, outsourced-process reviews',[
'Do external processes remain under QMS control, with defined controls over providers and their outputs?',
'Does the control approach consider potential conformity impacts and effectiveness of provider controls?',
'Are necessary verification or other activities defined to ensure external outputs meet requirements?']],
['8.4.3','Do','Supplier communication','Purchase orders, quality agreements, supplier instructions',[
'Are requirements checked for adequacy before being communicated to providers?',
'Are output requirements, approvals, methods, processes, equipment, release and competence communicated where applicable?',
'Are provider interactions, performance monitoring, and organization or customer verification at provider premises communicated as applicable?']],
['8.5.1','Do','Controlled production and service','Work instructions, process records, validation, release controls',[
'Are controlled information on characteristics, activities and intended results available at point of work?',
'Are suitable monitoring resources and checks used at appropriate stages against acceptance criteria?',
'Are suitable infrastructure, environment and competent or qualified people in place?',
'Are processes whose outputs cannot be subsequently verified validated and revalidated where needed?',
'Are actions to prevent human error and arrangements for release, delivery and post-delivery activities implemented?']],
['8.5.2','Do','Identification and traceability','Product labels, job status, batch or service records',[
'Are outputs identified as necessary and is inspection or measurement status identifiable throughout provision?',
'Where traceability is required, is unique identification controlled and necessary records retained?']],
['8.5.3','Do','Customer and provider property','Property inventories, inspection records, incident notifications',[
'Is customer or provider property identified, verified, protected and safeguarded while under organizational control?',
'Are loss, damage or unsuitability reported to the owner and records of what occurred retained?']],
['8.5.4','Do','Preservation','Storage conditions, handling, packaging, transport checks',[
'Are outputs preserved during production and service provision to maintain conformity?',
'Where relevant, are handling, contamination control, packaging, storage, transmission, transport and protection effective?']],
['8.5.5','Do','Post-delivery activities','Warranty records, service obligations, recall or support plans',[
'Are applicable post-delivery requirements met?',
'Does the extent of post-delivery activity consider legal requirements, potential undesired consequences, product or service nature, use and lifetime, customer requirements and feedback?']],
['8.5.6','Do','Production and service changes','Process change reviews, authorizations, resulting actions',[
'Are changes to provision reviewed and controlled sufficiently to maintain conformity?',
'Are review results, authorizing persons and necessary actions retained as documented information?']],
['8.6','Do','Release of products and services','Acceptance records, release approvals, delivery records',[
'Are planned checks completed at appropriate stages to verify requirements before release?',
'Are exceptions to planned release arrangements approved by relevant authority and the customer where applicable?',
'Do release records show evidence of meeting acceptance criteria and identify the authorizing person?']],
['8.7.1','Do','Control of nonconforming outputs','Quarantine records, service corrections, concession approvals',[
'Are nonconforming outputs identified and controlled to prevent unintended use or delivery, including issues found after delivery?',
'Are actions appropriate to the nature and effects of the nonconformity, such as correction, containment, return, suspension, notification or authorized concession?',
'Is conformity reverified after correction?']],
['8.7.2','Do','Nonconforming-output records','Nonconformance reports, dispositions, concession records',[
'Do retained records describe the nonconformity and actions taken?',
'Do records include concessions obtained and identify the authority deciding the disposition?']],
['9.1.1','Check','Monitoring and evaluation','Monitoring plans, KPI records, evaluation reports',[
'Are what to monitor or measure, suitable methods, timing and evaluation points determined?',
'Are QMS performance and effectiveness evaluated and appropriate evidence of results retained?']],
['9.1.2','Check','Customer satisfaction','Surveys, reviews, complaints, delivery and repeat-order trends',[
'Is customer perception of meeting needs and expectations monitored?',
'Are methods for obtaining, monitoring and reviewing customer-perception information determined and used?']],
['9.1.3','Check','Analysis and evaluation','Trend reports, provider analysis, risk-action reviews',[
'Are monitoring and measurement data analyzed to evaluate conformity and customer satisfaction?',
'Does evaluation address QMS performance and effectiveness, planning implementation and risk or opportunity action effectiveness?',
'Are external-provider performance and improvement needs evaluated?']],
['9.2.1','Check','Internal audit purpose','Audit reports, site audit schedule, audit criteria',[
'Do internal audits occur at planned intervals to assess conformity to organizational and applicable standard requirements?',
'Do audits assess whether the QMS is effectively implemented and maintained?']],
['9.2.2','Check','Internal audit program','Audit program, auditor competence, finding closure records',[
'Does the program specify frequency, methods, responsibilities, planning and reporting, considering process importance, changes and previous audit results?',
'Are scope and criteria defined for each audit and are auditors objective and impartial?',
'Are results reported to relevant management and are corrections and corrective actions taken without undue delay?',
'Are records of program implementation and audit results retained?']],
['9.3.1','Check','Management review: general','Review calendar, agendas, minutes, strategic reviews',[
'Does top management review the QMS at planned intervals?',
'Does the review evaluate continued suitability, adequacy, effectiveness and alignment with strategic direction?']],
['9.3.2','Check','Management review inputs','Review packs, trend charts, audit and resource reports',[
'Are previous review actions and changes in relevant external and internal issues considered?',
'Do performance trends cover customer satisfaction, feedback, objectives, process performance, conformity, nonconformities, corrective actions, monitoring, audits and external-provider performance?',
'Are resource adequacy, risk and opportunity action effectiveness and improvement opportunities considered?']],
['9.3.3','Check','Management review outputs','Decision logs, action assignments, approved resources',[
'Do review outputs include decisions and actions for improvement, QMS changes and resource needs?',
'Are review results retained as documented information and resulting actions followed through at the site?']],
['10.1','Act','Improvement: general','Improvement portfolio, project records, customer outcomes',[
'Are improvement opportunities selected and implemented to meet customer requirements and enhance satisfaction?',
'Do improvements address products and services including future needs, prevention or reduction of undesired effects, and QMS performance and effectiveness?']],
['10.2.1','Act','Nonconformity and corrective action','Corrective-action files, cause analysis, effectiveness reviews',[
'When a nonconformity or complaint occurs, is it controlled or corrected and are consequences addressed?',
'Is the need to eliminate causes evaluated using review, cause determination and consideration of similar or potential issues elsewhere?',
'Are proportionate actions implemented and their effectiveness reviewed?',
'Are risks and opportunities updated and QMS changes made when necessary?']],
['10.2.2','Act','Corrective-action evidence','Closed action records, verification evidence',[
'Are records retained of the nature of nonconformities and subsequent actions?',
'Are results of corrective actions retained?']],
['10.3','Act','Continual improvement','Improvement trends, management review outputs, effectiveness results',[
'How is the suitability, adequacy and effectiveness of the QMS continually improved?',
'Are analysis and evaluation results and management review outputs used to determine improvement needs and opportunities?']]
];
export const auditSections = clauses.map(([clause,phase,title,evidence,tests])=>({clause,phase,title,items:tests.map((question,index)=>({id:clause+'-'+(index+1),question,evidence}))}));
export const phases=['Plan','Do','Check','Act'];
