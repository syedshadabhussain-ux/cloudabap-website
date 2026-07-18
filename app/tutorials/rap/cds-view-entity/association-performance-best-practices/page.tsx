import ContentSection from "@/components/tutorials/ContentSection";
import TutorialLayout from "@/components/tutorials/TutorialLayout";
import ImageBlock from "@/components/tutorials/ImageBlock";
import CodeBlock from "@/components/tutorials/CodeBlock";
import ArchitectNote from "@/components/tutorials/ArchitectNote";
import ThinkLikeCompiler from "@/components/tutorials/ThinkLikeCompiler";
import CDSViewEntitySidebar from "@/components/tutorials/CDSViewEntitySidebar";
import CommonMistakes from "@/components/tutorials/CommonMistakes";
import InterviewQuestion from "@/components/tutorials/InterviewQuestion";
import KeyTakeaway from "@/components/tutorials/KeyTakeaway";
import PrevNext from "@/components/tutorials/PrevNext";

export default function Page() {
  return (
    <TutorialLayout
      title="Association Performance, Best Practices and Technical Architect Guide"
      category="CDS View Entity"
      duration="90 min read"
      breadcrumbPath="/tutorials/rap/cds-view-entity"
      sidebar={<CDSViewEntitySidebar />}
    >
      {/* Hero */}

      <ImageBlock
        src="/images/rap/cds-view-entity/association/association-master.webp"
        alt="Association Performance Guide"
        caption="Learn when Associations improve performance, when explicit JOINs are the better choice, and how SAP Technical Architects design reusable CDS Views for S/4HANA Public Cloud."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Masterclass">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-xl font-bold text-blue-900">
            Lesson 10 of 10 – Performance, Best Practices & Technical Architect
            Guide
          </h3>

          <p className="mt-3 text-slate-700">
            Congratulations! You've completed the Association Masterclass.
          </p>

          <p className="mt-3 text-slate-700">
            This final lesson brings everything together from a Technical
            Architect's perspective.
          </p>

          <blockquote className="mt-5 rounded-lg border-l-4 border-blue-600 bg-white px-6 py-4 text-lg italic text-slate-700">
            The question is no longer:
            <br />
            <br />
            "How do I create an Association?"
            <br />
            <br />
            The question becomes:
            <br />
            <br />
            "Should I use an Association at all?"
          </blockquote>

          <p className="mt-5 text-slate-700">
            Answering that question correctly is what separates an ABAP
            developer from an SAP Technical Architect.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Learning Objectives">
        <ul className="list-disc space-y-3 pl-6">
          <li>
            Understand the real performance characteristics of Associations.
          </li>

          <li>Know when Associations are the right choice.</li>

          <li>Know when explicit SQL JOINs are a better solution.</li>

          <li>Learn SAP recommended design patterns.</li>

          <li>Build reusable Interface Views like SAP.</li>
        </ul>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="The Biggest Myth About Associations">
        <blockquote className="rounded-lg border-l-4 border-red-500 bg-red-50 px-6 py-4 italic text-slate-700">
          Associations are always faster than SQL JOINs.
        </blockquote>

        <p className="mt-6">This statement is false.</p>

        <p>Associations do not magically make SQL faster.</p>

        <p>Associations improve architecture.</p>

        <p>
          The CDS compiler may then generate better SQL because it understands
          business relationships and can eliminate unnecessary JOINs.
        </p>

        <p>
          Performance is therefore a consequence of better modelling—not of the
          Association keyword itself.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        Never choose Associations because you believe they are faster.
        <br />
        <br />
        Choose Associations because they correctly model business relationships.
        <br />
        <br />
        Better performance is often a side effect—not the primary objective.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="When Should You Use Associations?">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Scenario</th>

              <th className="border px-4 py-3 text-left">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">Interface Views</td>

              <td className="border px-4 py-3">
                ✅ Always use Associations where relationships exist.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">RAP Business Objects</td>

              <td className="border px-4 py-3">✅ Preferred.</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Projection Views</td>

              <td className="border px-4 py-3">
                ✅ Reuse existing Associations.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Reusable Business Models</td>

              <td className="border px-4 py-3">✅ Strongly Recommended.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="When Should You Use Explicit JOINs?">
        <p>Associations are not the solution for every problem.</p>

        <p>
          There are scenarios where an explicit SQL JOIN is simpler and more
          appropriate.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Scenario</th>

              <th className="border px-4 py-3 text-left">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">One-off reporting CDS</td>

              <td className="border px-4 py-3">
                Explicit JOIN may be simpler.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Heavy aggregation</td>

              <td className="border px-4 py-3">
                JOIN often provides clearer SQL.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Temporary reporting logic</td>

              <td className="border px-4 py-3">
                Associations may provide little benefit.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">No future reuse expected</td>

              <td className="border px-4 py-3">Explicit JOIN is acceptable.</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Decision Matrix">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Question</th>

              <th className="border px-4 py-3 text-left">Choose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Is this business relationship reusable?
              </td>

              <td className="border px-4 py-3">Association</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Is this a one-off query?</td>

              <td className="border px-4 py-3">JOIN</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Will multiple applications consume this CDS?
              </td>

              <td className="border px-4 py-3">Association</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Is reuse unlikely?</td>

              <td className="border px-4 py-3">JOIN</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Architect's Decision"
        thought="Should this relationship become reusable business metadata or remain query-specific SQL?"
        steps={[
          "Is this relationship reusable?",
          "Will multiple consumers need it?",
          "Does it represent a genuine business relationship?",
          "If yes, create an Association.",
          "Otherwise, an explicit JOIN may be the better design.",
        ]}
        decision="Use Associations to model reusable business relationships—not simply because they exist."
        performanceTip="Good architecture usually leads to good performance. The reverse is not always true."
      />

      {/* ------------------------------------------------------------ */}

      <ContentSection title="SAP's Recommended CDS Architecture">
        <p>
          One of the biggest mistakes developers make is trying to build every
          requirement inside a single CDS View.
        </p>

        <p>
          SAP recommends separating responsibilities across different CDS View
          layers so that each layer has a clear purpose.
        </p>

        <CodeBlock
          title="Recommended Architecture"
          language="Text"
          code={`Database Tables

        ↓

Interface Views (Business Model)

        ↓

Projection Views

        ↓

Consumption Views

        ↓

Fiori Apps / RAP / OData / Analytics`}
        />

        <p>
          Associations belong primarily in the <strong>Interface View</strong>,
          where they define reusable business relationships.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Responsibilities of Each Layer">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Layer</th>

              <th className="border px-4 py-3 text-left">Responsibility</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3 font-semibold">Interface View</td>

              <td className="border px-4 py-3">
                Define business objects and reusable Associations.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-semibold">
                Projection View
              </td>

              <td className="border px-4 py-3">
                Expose only the required fields and Associations.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3 font-semibold">
                Consumption View
              </td>

              <td className="border px-4 py-3">
                Add UI, analytical and application-specific annotations.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A Poor Design">
        <p>Consider the following situation.</p>

        <CodeBlock
          title="Everything in One View"
          language="Text"
          code={`Sales Order

+ Customer

+ Items

+ Product

+ Plant

+ Address

+ Billing

+ Pricing

+ UI Logic

+ Analytics

+ Filters

+ Calculations`}
        />

        <p>
          Although this approach may work initially, it quickly becomes
          difficult to maintain.
        </p>

        <p>
          Every new application now depends on the same monolithic CDS View,
          even if it requires only a small subset of the available data.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="A Better Design">
        <CodeBlock
          title="Reusable Architecture"
          language="Text"
          code={`ZI_SalesOrder

├── _Customer

├── _Item

├── _Billing

├── _Partner

└── _Pricing

        ↓

ZC_SalesOrderApp

        ↓

Fiori

RAP

OData

Analytics`}
        />

        <p>
          The Interface View focuses only on modelling business relationships.
        </p>

        <p>Each consumer decides which Associations it wants to navigate.</p>

        <p>
          This keeps the Interface View reusable while allowing applications to
          remain lightweight.
        </p>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Common Design Mistakes">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-red-50">
            <tr>
              <th className="border px-4 py-3 text-left">Mistake</th>

              <th className="border px-4 py-3 text-left">Better Approach</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Repeating the same JOIN in multiple CDS Views.
              </td>

              <td className="border px-4 py-3">
                Define the Association once in the Interface View.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Creating very large Consumption Views.
              </td>

              <td className="border px-4 py-3">
                Keep Consumption Views application-specific.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Mixing UI logic with business modelling.
              </td>

              <td className="border px-4 py-3">
                Separate modelling from presentation.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Creating duplicate Associations.
              </td>

              <td className="border px-4 py-3">
                Reuse existing released Interface Views whenever possible.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Performance Myths vs Reality">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Myth</th>

              <th className="border px-4 py-3 text-left">Reality</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Associations are always faster.
              </td>

              <td className="border px-4 py-3">
                Performance depends on the generated SQL and execution plan.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                More Associations make a CDS View slower.
              </td>

              <td className="border px-4 py-3">
                Unused Associations are not necessarily converted into JOINs.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">JOINs are bad.</td>

              <td className="border px-4 py-3">
                Explicit JOINs are appropriate for many reporting scenarios.
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Associations eliminate every JOIN.
              </td>

              <td className="border px-4 py-3">
                Associations eventually become JOINs when navigation requires
                them.
              </td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Architectural Thinking"
        thought="The compiler cannot fix a poorly designed data model. Good modelling decisions come first."
        steps={[
          "Identify the core business object.",
          "Define reusable business relationships.",
          "Keep Interface Views generic.",
          "Move application-specific logic to Projection or Consumption Views.",
          "Allow consumers to navigate only what they need.",
        ]}
        decision="A well-layered CDS architecture is easier to maintain, easier to extend and usually produces better optimized SQL."
        performanceTip="Design for reuse first. Performance tuning becomes much easier when responsibilities are clearly separated."
      />

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Technical Architect Insight</strong>
        <br />
        <br />
        When reviewing a CDS implementation, don't start by asking whether it
        uses Associations or JOINs.
        <br />
        <br />
        Start by asking whether the business model has been designed correctly.
        <br />
        <br />
        If the modelling is correct, choosing between an Association and an
        explicit JOIN becomes much simpler because each serves a different
        architectural purpose.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association Design Checklist">
        <p>
          Before activating any CDS View, go through the following checklist.
          This is very similar to the review process followed by SAP Technical
          Architects during code reviews.
        </p>

        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-green-50">
            <tr>
              <th className="border px-4 py-3 text-left">Question</th>

              <th className="border px-4 py-3 text-center">✓</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Does the Association represent a real business relationship?
              </td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Is the Cardinality correct?</td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Is the ON condition defining only the relationship?
              </td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Are business filters placed in WHERE instead of ON?
              </td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Can this Association be reused by another CDS View?
              </td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">
                Is there already a released SAP Interface View providing this
                Association?
              </td>
              <td className="border px-4 py-3 text-center">□</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Association vs JOIN Decision Matrix">
        <table className="mt-6 w-full border-collapse overflow-hidden rounded-xl border">
          <thead className="bg-slate-100">
            <tr>
              <th className="border px-4 py-3 text-left">Requirement</th>

              <th className="border px-4 py-3 text-left">Recommended Choice</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-3">
                Reusable business relationship
              </td>
              <td className="border px-4 py-3">✅ Association</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Interface View</td>
              <td className="border px-4 py-3">✅ Association</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">RAP Business Object</td>
              <td className="border px-4 py-3">✅ Association</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">One-time reporting CDS</td>
              <td className="border px-4 py-3">✅ JOIN</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Complex reporting query</td>
              <td className="border px-4 py-3">Usually JOIN</td>
            </tr>

            <tr>
              <td className="border px-4 py-3">Shared business model</td>
              <td className="border px-4 py-3">Association</td>
            </tr>
          </tbody>
        </table>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Top 10 Best Practices">
        <ol className="list-decimal space-y-4 pl-6">
          <li>Model business relationships, not SQL JOINs.</li>

          <li>Choose Cardinality based on business semantics.</li>

          <li>Keep ON conditions limited to relationship logic.</li>

          <li>Apply business filters using WHERE.</li>

          <li>Reuse released SAP Interface Views whenever possible.</li>

          <li>Prefer Associations in Interface Views.</li>

          <li>Expose Associations instead of recreating them.</li>

          <li>Allow consumers to navigate only the data they require.</li>

          <li>Don't assume Associations always improve performance.</li>

          <li>Always think like the CDS compiler.</li>
        </ol>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Top 10 Common Mistakes">
        <CommonMistakes
          items={[
            "Using [0..*] when the relationship is actually TO ONE.",
            "Using ON conditions to implement business filtering.",
            "Thinking Associations replace every SQL JOIN.",
            "Ignoring released SAP Interface Views.",
            "Creating duplicate business relationships.",
            "Using Associations where a simple JOIN would be clearer.",
            "Designing Interface Views for one application only.",
            "Repeating JOIN logic across multiple CDS Views.",
            "Not understanding generated SQL.",
            "Treating Associations as syntax instead of business metadata.",
          ]}
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Interview Questions (Quick Revision)">
        <InterviewQuestion
          level="Beginner"
          question="Why were Associations introduced in ABAP CDS?"
          answer="To model reusable business relationships instead of repeatedly writing SQL JOINs."
        />

        <InterviewQuestion
          level="Experienced"
          question="Does every Association become a JOIN?"
          answer="No. The CDS compiler generates JOINs only for navigated Associations required by the consumer."
        />

        <InterviewQuestion
          level="Experienced"
          question="Why are TO MANY Associations restricted in certain scenarios?"
          answer="Because multiple matching target records create ambiguous semantics that the compiler cannot resolve deterministically."
        />

        <InterviewQuestion
          level="Architect"
          question="When would you intentionally choose a SQL JOIN instead of an Association?"
          answer="For one-off reporting, heavy aggregation or query-specific logic where relationship reuse is not required."
        />

        <InterviewQuestion
          level="Architect"
          question="What is the primary purpose of an Interface View?"
          answer="To model reusable business objects and their relationships so that Projection Views, RAP services and analytical applications can consume the same business model."
        />
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <ThinkLikeCompiler
        title="Final Mental Model"
        thought="Forget SQL for a moment. Start by understanding the business objects and how they relate to each other."
        steps={[
          "Identify the root business object.",
          "Define genuine business relationships.",
          "Choose the correct Cardinality.",
          "Expose reusable Associations.",
          "Let consumers navigate what they need.",
          "Allow the CDS compiler to generate optimized SQL.",
        ]}
        decision="Good CDS design begins with business modelling and ends with efficient SQL generation."
        performanceTip="When you consistently think in terms of business relationships rather than JOIN statements, your CDS models become easier to reuse, maintain and optimize."
      />

      {/* ------------------------------------------------------------ */}

      <ArchitectNote>
        <strong>Final Advice from a Technical Architect</strong>
        <br />
        <br />
        Developers write CDS Views.
        <br />
        <br />
        Senior developers design reusable CDS models.
        <br />
        <br />
        Technical Architects design business object graphs.
        <br />
        <br />
        If you master Associations, Cardinality, Navigation and the CDS
        compiler's behavior, you'll naturally begin designing solutions the same
        way SAP designs its released Virtual Data Model.
      </ArchitectNote>

      {/* ------------------------------------------------------------ */}

      <KeyTakeaway>
        <p>Associations are far more than a replacement for SQL JOINs.</p>

        <p>
          They represent reusable business relationships that enable SAP's
          Virtual Data Model, RAP and S/4HANA Public Cloud architecture.
        </p>

        <p>
          Throughout this masterclass you've learned not only the syntax, but
          also how the CDS compiler interprets Associations, generates SQL,
          validates Cardinality and optimizes execution.
        </p>

        <p>
          Mastering these concepts will help you build cleaner, reusable and
          future-proof CDS Views that align with SAP's recommended architecture.
        </p>
      </KeyTakeaway>

      {/* ------------------------------------------------------------ */}

      <ContentSection title="Congratulations 🎉">
        <div className="rounded-xl border border-green-200 bg-green-50 p-8">
          <h3 className="text-2xl font-bold text-green-800">
            You've Successfully Completed the CloudABAP Association Masterclass
          </h3>

          <p className="mt-6 text-slate-700">You now understand:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Why SAP introduced Associations</li>

            <li>How Cardinality affects navigation</li>

            <li>Lazy Loading and Join Elimination</li>

            <li>Association vs JOIN</li>

            <li>ON vs WHERE</li>

            <li>Generated SQL</li>

            <li>Nested and reusable Associations</li>

            <li>SAP Virtual Data Model design principles</li>

            <li>Performance and architectural best practices</li>
          </ul>

          <p className="mt-6 text-slate-700">
            You're now equipped to design enterprise-grade CDS View Entities
            following SAP's recommended architecture for ABAP Cloud and S/4HANA
            Public Cloud.
          </p>
        </div>
      </ContentSection>

      {/* ------------------------------------------------------------ */}

      <PrevNext
        prevTitle="Advanced Patterns"
        prevHref="/tutorials/rap/cds-view-entity/association-advanced-patterns"
        nextTitle="Aggregate Functions, GROUP BY & HAVING"
        nextHref="/tutorials/rap/cds-view-entity/aggregate-functions-group-by-having"
      />
    </TutorialLayout>
  );
}
